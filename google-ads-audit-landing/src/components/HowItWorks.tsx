import { STEPS } from "../content";

export default function HowItWorks() {
  return (
    <section className="section steps">
      <div className="container">
        <span className="eyebrow eyebrow--center">The Process</span>
        <h2 className="section__title section__title--center">
          How It Works
        </h2>
        <div className="steps__grid">
          {STEPS.map((step, index) => (
            <div key={step.title} className="steps__card">
              <span className="steps__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
