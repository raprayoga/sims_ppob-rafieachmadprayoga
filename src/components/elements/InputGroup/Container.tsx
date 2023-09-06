import * as React from "react";
import { cn } from "@/utils";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-full items-center justify-center rounded-none bg-cobalt p-2.5 text-center font-bold text-white",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Container.displayName = "Container";

export { Container };
