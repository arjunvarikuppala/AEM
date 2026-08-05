export default function FaqSection({ faqs }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 sm:p-8 mt-12">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl">Get answers to common questions about our earth moving, JCB rental, excavation, and land leveling services in Hyderabad.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="rounded-3xl border border-white/10 bg-[#141414] p-5">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{faq.question}</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
