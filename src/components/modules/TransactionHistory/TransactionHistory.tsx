import React, { useEffect, useState } from "react";
import Card from "@/components/elements/Card";
import dateFormat from "@/utils/dateFormat";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { sliceState } from "@/interface/state";
import { resetTransaction, transactionsAsync } from "@/store/transactions";
import { Record } from "@/interface/transactions";

export function TransactionHistory({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const dispatch: Dispatch<any> = useDispatch();
  const transactions = useSelector((state: sliceState) => state.transactions);
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 5;

  const handleLoadMore = () => {
    setOffset((prevState) => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    return () => {
      dispatch(resetTransaction());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(transactionsAsync({ limit, offset }));
  }, [dispatch, offset]);

  return (
    <div {...props}>
      <h5 className="text-lg font-bold mb-5">Semua Transaksi</h5>
      {transactions.data.map((transaction: Record) => (
        <Card
          key={transaction.invoice_number}
          className="flex justify-between mb-5 border-gray-1"
        >
          <div>
            {transaction.transaction_type === "TOPUP" && (
              <p className="text-lg font-bold text-green">
                + Rp.
                {new Intl.NumberFormat("id-ID").format(
                  transaction.total_amount
                )}
              </p>
            )}
            {transaction.transaction_type !== "TOPUP" && (
              <p className="text-lg font-bold text-primary">
                - Rp.
                {new Intl.NumberFormat("id-ID").format(
                  transaction.total_amount
                )}
              </p>
            )}

            <p className="text-[10px] text-gray">
              {dateFormat(transaction.created_on)}
            </p>
          </div>
          <p className="text-[10px]">{transaction.description}</p>
        </Card>
      ))}

      {transactions.isShowLoadMore && (
        <p
          className={`text-center ${
            transactions.loading ? "" : "text-primary font-bold cursor-pointer"
          }`}
          onClick={handleLoadMore}
        >
          {transactions.loading ? "Loading..." : "Show more"}
        </p>
      )}
    </div>
  );
}
