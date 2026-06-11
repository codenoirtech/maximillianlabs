import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
};

export function SectionLabel({
  children,
  className,
  inverted = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "mb-4 inline-flex items-center gap-3 text-[clamp(0.85rem,0.7rem+0.35vw,1.1rem)] leading-none tracking-[0.2em] capitalize",
        inverted ? "text-white/50" : "text-black/50",
        className,
      )}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#fe0168]" />
      <span>{children}</span>
    </div>
  );
}
