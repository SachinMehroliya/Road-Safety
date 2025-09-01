import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a Road Safety Audit (RSA)?",
      answer:
        "A Road Safety Audit is a formal evaluation of road projects, both new and existing, to identify potential safety issues. AI enhances this process by analyzing data more quickly and accurately.",
    },
    {
      question: "How does AI contribute to Road Safety Audits?",
      answer:
        "AI analyses vast amounts of traffic data, crash statistics, and road conditions, identifying patterns and potential hazards that might be missed by manual audits, leading to more effective safety recommendations.",
    },
    {
      question: "What are the benefits of using AI in Road Safety Audits?",
      answer:
        "AI improves efficiency, reduces costs, enhances accuracy, and provides real-time insights. It ensures proactive risk management and scalability across projects of all sizes.",
    },
    {
      question: "Can AI predict future road safety risks?",
      answer:
        "Yes. AI’s predictive analytics can highlight potential risks before they escalate, allowing stakeholders to take proactive measures to enhance road safety.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-4"
          >
            <button
              className="flex justify-between items-center w-full text-left text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-4">
                {openIndex === index ? "✖" : "➕"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
