import React from "react";
import Card from "@/components/elements/Card";
import dateFormat from "@/utils/dateFormat";

export function TransactionHistory({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const transactions = [
    {
      invoice_number: "INV17082023-001",
      transaction_type: "TOPUP",
      description: "Top Up balance",
      total_amount: 100000,
      created_on: "2023-08-17T10:10:10.000Z",
    },
    {
      invoice_number: "INV17082023-002",
      transaction_type: "PAYMENT",
      description: "PLN Pascabayar",
      total_amount: 10000,
      created_on: "2023-08-17T11:10:10.000Z",
    },
    {
      invoice_number: "INV17082023-003",
      transaction_type: "PAYMENT",
      description: "Pulsa Indosat",
      total_amount: 40000,
      created_on: "2023-08-17T12:10:10.000Z",
    },
  ];

  return (
    <div {...props}>
      <h5 className="text-lg font-bold mb-5">Semua Transaksi</h5>
      {transactions.map((transaction) => (
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

      <p className="text-primary font-bold text-center cursor-pointer">
        Show more
      </p>
    </div>
  );
}
