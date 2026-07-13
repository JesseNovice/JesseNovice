import { useState } from "react";
import { FAQS } from "../content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq">
      <div className="container container--narrow">
        <h2 className="section__title section__title--center">
          Questions You Might Have
        </h2>
        <div className="faq__list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq__toggle">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="faq__answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
