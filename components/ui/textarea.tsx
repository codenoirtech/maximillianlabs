import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "relative z-10 flex min-h-[200px] w-full resize-y rounded-lg border-0 bg-[#333333] px-5 py-4 text-base text-white placeholder:text-zinc-500 outline-none ring-0 transition-colors focus:bg-[#3a3a3a] focus:ring-2 focus:ring-white/10 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
