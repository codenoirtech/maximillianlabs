import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "relative z-10 flex h-[3.75rem] w-full rounded-lg border-0 bg-[#333333] px-5 text-base text-white placeholder:text-zinc-500 outline-none ring-0 transition-colors focus:bg-[#3a3a3a] focus:ring-2 focus:ring-white/10 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
