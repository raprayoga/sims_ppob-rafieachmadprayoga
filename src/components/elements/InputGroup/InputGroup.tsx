import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

export const inputGroupVariant = cva(
  "flex justify-center items-center rounded-lg p-0 overflow-hidden",
  {
    variants: {
      sizes: {
        small: "h-[35px] text-xs",
        large: "h-10 text-sm",
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
