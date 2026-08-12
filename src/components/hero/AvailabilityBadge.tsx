export function AvailabilityBadge() {
  return (
    <div
      className="
        inline-flex items-center gap-2 rounded-full border border-border
        bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted
        backdrop-blur-sm
      "
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>
      Available for new opportunities
    </div>
  );
}
