import { SectionLabel } from "./SectionLabel";

const items = [
  {
    question: "What is Vinsta Compute?",
    answer:
      "Vinsta Compute is vinStelX's orbital edge compute platform. It processes, stores, and runs AI inference on satellite data in low Earth orbit — before selective downlink to ground.",
  },
  {
    question: "Who is it built for?",
    answer:
      "Constellation operators in earth observation, defense, telecom, and science who need lower latency, reduced downlink costs, and sovereign control over orbital data processing.",
  },
  {
    question: "How does it integrate with existing systems?",
    answer:
      "Vinsta Compute connects via optical and RF crosslinks to your constellation, with open workload APIs and ground orchestration tools that fit into your existing mission operations workflow.",
  },
  {
    question: "When will it be available?",
    answer:
      "We are currently running our orbital demonstrator program in 2026. Contact us to join the early access pilot for constellation operators.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 text-2xl font-light text-white md:text-3xl">
          Common questions.
        </h2>
        <ul className="mt-16 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <li key={item.question}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-white transition-colors hover:text-white/80 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
