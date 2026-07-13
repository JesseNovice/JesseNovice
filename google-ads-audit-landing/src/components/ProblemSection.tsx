import { PAIN_POINTS } from "../content";

export default function ProblemSection() {
  return (
    <section className="section problem">
      <div className="container">
        <h2 className="section__title">
          If Any Of This Sounds Familiar, We Need To Talk
        </h2>
        <ul className="pain-list">
          {PAIN_POINTS.map((point) => (
            <li key={point} className="pain-list__item">
              <span className="pain-list__icon">✕</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
