import { GOOD_FIT, NOT_A_FIT } from "../content";

export default function WhoThisIsFor() {
  return (
    <section className="section fit">
      <div className="container fit__grid">
        <div className="fit__column fit__column--good">
          <h3>This Is For You If...</h3>
          <ul>
            {GOOD_FIT.map((item) => (
              <li key={item}>
                <span className="fit__icon fit__icon--good">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="fit__column fit__column--bad">
          <h3>This Isn't For You If...</h3>
          <ul>
            {NOT_A_FIT.map((item) => (
              <li key={item}>
                <span className="fit__icon fit__icon--bad">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
