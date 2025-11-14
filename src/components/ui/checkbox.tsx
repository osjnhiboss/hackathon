import * as React from "react";
import { CheckIcon } from "lucide-react";

import { cn } from "./utils";

interface CheckboxProps extends Omit<React.ComponentProps<"input">, "type"> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative inline-flex">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "peer size-4 shrink-0 rounded-[4px] border border-primary shadow-xs",
            "bg-input-background focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "appearance-none cursor-pointer",
            className,
          )}
          onChange={(e) => {
            if (onCheckedChange) {
              onCheckedChange(e.target.checked);
            }
            props.onChange?.(e);
          }}
          {...props}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-primary-foreground opacity-0 peer-checked:opacity-100 peer-checked:bg-primary peer-checked:border-primary rounded-[4px]">
          <CheckIcon className="size-3.5" />
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
