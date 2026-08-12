import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  title: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({ title, action, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex items-center justify-between gap-4", className)}>
      <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[28px]">
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
        />
        {title}
      </h2>
      {action}
    </div>
  );
}
