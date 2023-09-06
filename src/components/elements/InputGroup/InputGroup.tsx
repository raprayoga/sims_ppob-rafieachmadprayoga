import * as React from "react";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className="relative flex justify-center items-center p-0 overflow-hidden h-full text-sm"
      ref={ref}
      {...props}
    />
  );
});
InputGroup.displayName = "InputGroup";

export { InputGroup };
