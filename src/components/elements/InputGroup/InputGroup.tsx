import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

export const inputGroupVariant = cva(
  "relative flex justify-center items-center p-0 overflow-hidden h-full",
  {
    variants: {
      sizes: {
        small: "text-xs",
        large: "text-sm",
      },
    },
    defaultVariants: {
      sizes: "small",
    },
  }
);

export interface InputGroupProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariant> {
  className?: string;
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, sizes, ...props }, ref) => {
    return (
      <div
        className={cn(inputGroupVariant({ sizes, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
InputGroup.displayName = "InputGroup";

export { InputGroup };
