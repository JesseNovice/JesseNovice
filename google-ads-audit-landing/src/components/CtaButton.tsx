import { CALENDLY_URL } from "../content";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "large";
  className?: string;
};

export default function CtaButton({ children, variant = "primary", className = "" }: CtaButtonProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button cta-button--${variant} ${className}`}
    >
      {children}
    </a>
  );
}
