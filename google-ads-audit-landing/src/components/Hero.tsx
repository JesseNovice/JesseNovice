import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Free 15-Minute Google Ads Audit</span>
          <h1>
            Stop Burning Ad Spend On Google Ads That Don't Convert
          </h1>
          <p className="hero__subhead">
            We'll dig into your live account and show you exactly where you're
            bleeding budget — and the fastest fixes to turn it into profit.
            No pitch. No fluff. Just a straight-up audit.
          </p>
          <div className="hero__cta-row">
            <CtaButton variant="large">Book My Free Audit →</CtaButton>
            <span className="hero__microcopy">
              100% free &middot; No obligation &middot; Takes 15 minutes
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="mock-dashboard">
            <div className="mock-dashboard__header">
              <span className="mock-dot mock-dot--red" />
              <span className="mock-dot mock-dot--yellow" />
              <span className="mock-dot mock-dot--green" />
              <span className="mock-dashboard__title">Account Overview</span>
            </div>
            <div className="mock-dashboard__stats">
              <div className="mock-stat">
                <span className="mock-stat__label">Wasted Spend Found</span>
                <span className="mock-stat__value mock-stat__value--down">
                  Flagged
                </span>
              </div>
              <div className="mock-stat">
                <span className="mock-stat__label">Quality Score</span>
                <span className="mock-stat__value">Reviewed</span>
              </div>
              <div className="mock-stat">
                <span className="mock-stat__label">Conversion Tracking</span>
                <span className="mock-stat__value">Verified</span>
              </div>
            </div>
            <div className="mock-dashboard__bars">
              <span className="mock-bar" style={{ height: "40%" }} />
              <span className="mock-bar" style={{ height: "70%" }} />
              <span className="mock-bar" style={{ height: "55%" }} />
              <span className="mock-bar mock-bar--accent" style={{ height: "90%" }} />
              <span className="mock-bar" style={{ height: "35%" }} />
              <span className="mock-bar" style={{ height: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
