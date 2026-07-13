import { AUDIT_INCLUDES } from "../content";
import CtaButton from "./CtaButton";

export default function AuditIncludes() {
  return (
    <section className="section includes">
      <div className="container">
        <span className="eyebrow eyebrow--center">What You Get</span>
        <h2 className="section__title section__title--center">
          What You'll Walk Away With
        </h2>
        <div className="includes__grid">
          {AUDIT_INCLUDES.map((item) => (
            <div key={item.title} className="includes__card">
              <span className="includes__check">✓</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="section__cta">
          <CtaButton variant="large">Claim My Free Audit →</CtaButton>
        </div>
      </div>
    </section>
  );
}
