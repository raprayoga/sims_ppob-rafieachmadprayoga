import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

export const inputVariant = cva(
  "h-full w-full border rounded outline-0 color-gray focus:shadow-md py-2 text-gray px-2",
  {
    variants: {
      variant: {
        default: "border-gray focus:shadow-gray",
        primary: "border-primary focus:shadow-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariant({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
