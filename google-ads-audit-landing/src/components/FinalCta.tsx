import CtaButton from "./CtaButton";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <h2>Ready To See What's Really Happening In Your Account?</h2>
        <p>
          Fifteen minutes. Zero cost. A clear picture of what's working, what's
          not, and what to fix first.
        </p>
        <CtaButton variant="large">Book My Free Audit →</CtaButton>
      </div>
    </section>
  );
}
