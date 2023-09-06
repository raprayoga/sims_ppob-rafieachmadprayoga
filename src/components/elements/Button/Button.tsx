import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "px-5 py-2 flex items-center justify-center text-center lg:text-sm text-xs font-bold rounded cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      theme: {
        primary: "bg-primary text-white hover:opacity-90",
        green: "bg-green",
      },
      isDisabled: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      theme: "primary",
      isDisabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isSmall?: boolean;
  isDisabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, isDisabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ theme, isDisabled }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
