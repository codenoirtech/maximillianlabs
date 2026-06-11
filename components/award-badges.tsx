import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ClutchLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 106 30"
      className={cn("h-[30%] w-auto fill-current", className)}
    >
      <path d="M27.582 0H32.4078V30H27.582V0ZM49.2982 20.43C49.2982 25.0212 45.417 25.3872 44.2624 25.3872C41.3778 25.3872 40.853 22.7016 40.853 21.0816V9.6H36.0272V21.0576C36.0272 23.9016 36.9248 26.2488 38.498 27.8136C39.8878 29.1972 41.9702 29.9532 44.2262 29.9532C45.826 29.9532 48.0917 29.4576 49.2982 28.362V30H54.124V9.6H49.2982V20.43ZM63.7756 2.4H58.9498V9.6H55.3304V14.4H58.9498V30H63.7756V14.4H67.3949V9.6H63.7756V2.4ZM82.5926 23.9004C81.5418 24.84 80.1544 25.3608 78.6318 25.3608C75.2755 25.3608 72.8107 22.9092 72.8107 19.5432C72.8107 16.1772 75.197 13.8288 78.6318 13.8288C80.1278 13.8288 81.5418 14.3244 82.6191 15.264L83.3514 15.8904L86.6052 12.6552L85.7909 11.9244C83.8763 10.2048 81.3343 9.24 78.6306 9.24C72.5983 9.24 68.2177 13.5696 68.2177 19.518C68.2177 25.4412 72.7033 29.9256 78.6306 29.9256C81.3849 29.9256 83.9535 28.9608 85.844 27.2136L86.6306 26.4828L83.3261 23.25L82.5926 23.9004ZM103.83 11.3784C102.44 9.996 100.811 9.24 98.5551 9.24C96.9554 9.24 95.1433 9.7356 93.9368 10.83V0H89.111V30H93.9368V18.762C93.9368 14.1708 97.216 13.806 98.3706 13.806C101.255 13.806 101.176 16.4928 101.176 18.1104V30H106.001V18.1356C106.001 15.2916 105.404 12.9444 103.83 11.3784Z" />
      <path d="M20.8246 22.465C18.9895 24.343 16.497 25.3606 13.8742 25.3606C8.49824 25.3606 4.58934 21.1606 4.58934 15.3958C4.58934 9.60464 8.49824 5.40464 13.8742 5.40464C16.4717 5.40464 18.9365 6.42104 20.7992 8.27384L21.5327 9.00464L24.7588 5.79584L24.0506 5.06504C21.3759 2.32544 17.7565 0.839844 13.8742 0.839844C5.95384 0.839844 0 7.10024 0 15.421C0 23.7166 5.98038 29.9518 13.8742 29.9518C17.7831 29.9518 21.4024 28.4398 24.0771 25.7002L24.7853 24.9694L21.5858 21.709L20.8246 22.465Z" />
      <path
        d="M80.9386 17.1415C80.2843 16.4906 79.3968 16.125 78.4715 16.125C77.5461 16.125 76.6587 16.4906 76.0043 17.1415C75.35 17.7923 74.9824 18.675 74.9824 19.5954C74.9824 20.5158 75.35 21.3985 76.0043 22.0493C76.6587 22.7002 77.5461 23.0658 78.4715 23.0658C79.3968 23.0658 80.2843 22.7002 80.9386 22.0493C81.5929 21.3985 81.9605 20.5158 81.9605 19.5954C81.9605 18.675 81.5929 17.7923 80.9386 17.1415Z"
        fill="#EF4335"
      />
    </svg>
  );
}

export function AwwwardsLogo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 164 25"
      className={cn("h-[40%] w-auto fill-current", className)}
    >
      <path d="M16.22 16.04L8.11 8.02 16.22 0H8.11L0 8.02l4.055 4.055L8.11 16.04l4.055 3.964z" />
      <path d="M21.987 12.075L17.932 8.02l-4.055-3.965L9.912 8.02l8.02 8.02-8.11 8.02h8.11l4.055-3.965 4.055-4.055z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[0.6rem] w-[0.6rem] fill-[#fe0048]"
    >
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.6 1.7 7-6.3-3.8-6.3 3.8 1.7-7-5.4-4.6 7.1-.6z" />
    </svg>
  );
}

export type AwardBadgeItem = {
  key: string;
  logo: ReactNode;
  content: ReactNode;
};

export const awardBadges: AwardBadgeItem[] = [
  {
    key: "clutch",
    logo: <ClutchLogo />,
    content: (
      <>
        50+ Reviews
        <div className="mt-0.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} />
          ))}
          <span className="ml-1">5.0</span>
        </div>
      </>
    ),
  },
  {
    key: "awwwards-1",
    logo: <AwwwardsLogo />,
    content: (
      <>
        Multiple
        <br />
        Awarded
      </>
    ),
  },
  {
    key: "awwwards-2",
    logo: <AwwwardsLogo />,
    content: (
      <>
        Multiple
        <br />
        Awarded
      </>
    ),
  },
  {
    key: "awwwards-3",
    logo: <AwwwardsLogo />,
    content: (
      <>
        Multiple
        <br />
        Awarded
      </>
    ),
  },
];

export function AwardBadge({
  logo,
  content,
  variant = "light",
}: {
  logo: ReactNode;
  content: ReactNode;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "award-badge inline-flex h-16 max-w-[280px] shrink-0 items-center justify-center rounded-lg px-6 md:h-16 md:px-7",
        isDark
          ? "bg-white/5 text-white backdrop-blur-xl"
          : "border border-[#151717]/5 bg-[#d5b489]/10 text-[#151717] backdrop-blur-xl",
      )}
    >
      <div className="flex h-[40%] shrink-0 items-center">{logo}</div>
      <div
        className={cn(
          "award-badge-content pl-4 text-left text-[0.75rem] uppercase leading-tight tracking-[0.075em]",
          isDark ? "text-white/80" : "text-[#151717]/80",
        )}
      >
        {content}
      </div>
    </div>
  );
}

export function FooterAwardsMarquee() {
  const items = [...awardBadges, ...awardBadges];

  return (
    <div className="footer-awards-mask -mx-[10%] overflow-hidden">
      <div className="footer-awards-track flex w-max items-center gap-2">
        {items.map((badge, index) => (
          <div key={`${badge.key}-${index}`} className="shrink-0">
            <AwardBadge
              logo={badge.logo}
              content={badge.content}
              variant="dark"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
