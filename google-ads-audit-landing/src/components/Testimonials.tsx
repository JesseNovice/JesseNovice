import { TESTIMONIALS } from "../content";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <span className="eyebrow eyebrow--center">Results</span>
        <h2 className="section__title section__title--center">
          What Clients Say
        </h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, index) => (
            <blockquote key={index} className="testimonial-card">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
