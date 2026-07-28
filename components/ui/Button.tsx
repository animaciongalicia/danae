import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent-strong text-white hover:bg-accent-hover",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent-strong",
};

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
}

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export function SubmitButton({ disabled, children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseClasses} ${variantClasses.primary} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}
