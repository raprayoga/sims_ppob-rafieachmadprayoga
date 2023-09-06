import React from "react";
import { cn } from "@/utils";

export interface DalogProps extends React.HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  className?: string;
}

const Dialog = React.forwardRef<HTMLDivElement, DalogProps>(
  ({ className, isShow, ...props }, ref) =>
    isShow && (
      <>
        <div ref={ref} className="fixed inset-0 z-50 bg-gray-1">
          <div
            className={cn(
              "fixed bg-white left-[50%] top-[50%] z-50 max-w-full p-6 shadow-lg rounded-lg fade-in",
              className
            )}
            {...props}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            quisquam et temporibus ipsum consectetur nemo vero, in reiciendis!
            Fuga iste vero consequatur, accusantium aspernatur, quisquam atque
            temporibus porro deleniti nihil doloremque, quia autem odio
            praesentium sunt molestiae dolorem. Deserunt ea neque, beatae
            laudantium saepe quim eius! Natus numquam sapiente, omnis quia
            assumenda sequi illo?
          </div>
        </div>
      </>
    )
);
Dialog.displayName = "Dialog";

export { Dialog };
