import { BRAND_NAME } from "../content";
import CtaButton from "./CtaButton";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <span className="site-header__logo">{BRAND_NAME}</span>
        <CtaButton variant="primary" className="site-header__cta">
          Get My Free Audit
        </CtaButton>
      </div>
    </header>
  );
}
