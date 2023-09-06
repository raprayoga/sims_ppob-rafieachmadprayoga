import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "px-5 py-2 flex items-center justify-center text-center lg:text-sm text-xs rounded cursor-pointer disabled:cursor-not-allowed transition-colors",
  {
    variants: {
      theme: {
        primary: "bg-primary text-white hover:opacity-90",
        green: "bg-green",
      },
      variant: {
        filled: "",
        ghost: "",
      },
      isDisabled: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      theme: "primary",
      variant: "filled",
      isDisabled: false,
    },
    compoundVariants: [
      {
        variant: "filled",
        theme: "primary",
        class: "bg-primary text-white hover:opacity-90",
      },
      {
        variant: "ghost",
        theme: "primary",
        class:
          "border border-primary text-primary bg-white hover:bg-primary hover:text-white",
      },
      {
        variant: "filled",
        theme: "green",
        class: "bg-green text-white hover:opacity-90",
      },
      {
        variant: "ghost",
        theme: "green",
        class:
          "border border-green text-green bg-white hover:bg-green hover:text-white",
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isSmall?: boolean;
  isDisabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, variant, isDisabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ theme, variant, isDisabled }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
