import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "outline" | "fill" | "outlineLight";

const base =
  "inline-block font-sans text-[11px] tracking-[0.16em] uppercase px-[30px] py-[15px] " +
  "border transition-all duration-300 ease-[var(--ease-editorial)] hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  outline: "text-ink border-ink hover:bg-ink hover:text-offwhite",
  outlineLight:
    "text-offwhite border-offwhite/70 hover:bg-offwhite hover:text-ink",
  fill: "bg-petrol text-white border-petrol hover:bg-transparent hover:text-petrol",
};

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  variant = "outline",
  children,
  external,
  className,
}: Props) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
