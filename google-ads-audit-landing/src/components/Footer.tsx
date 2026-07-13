import { BRAND_NAME } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>&copy; {year} {BRAND_NAME}. All rights reserved.</span>
        <span className="site-footer__disclaimer">
          Not affiliated with or endorsed by Google LLC.
        </span>
      </div>
    </footer>
  );
}
