import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = createMetadata({
  title: "Terms & Conditions | Aadhya Earth Movers",
  description: "Terms and Conditions for engaging Aadhya Earth Movers earth excavation, rock breaking, road grading, and machinery services in Hyderabad.",
  pathname: "/terms-and-conditions",
  keywords: "terms and conditions, service agreement, Aadhya Earth Movers, equipment rental, Hyderabad"
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms & Conditions", href: "/terms-and-conditions" }]} />
      <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Terms &amp; <span className="text-[#F4B400]">Conditions</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Last Updated: August 2026
          </p>
        </div>

        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website or contracting Aadhya Earth Movers for earthmoving, rock breaking, land clearing, or equipment rentals, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              2. Scope of Services
            </h2>
            <p>
              Aadhya Earth Movers provides heavy machinery, earthwork contracting, excavation, rock breaker deployment, and road construction services across Hyderabad and surrounding districts. Service quotes are subject to site survey and availability of machinery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              3. Quotations & Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>All pricing estimates provided are valid for 15 calendar days from issuance.</li>
              <li>Payment schedules for contractual works are finalized mutually prior to equipment mobilization.</li>
              <li>Hourly machine rental charges include skilled operator deployment and standard fuel terms unless stated otherwise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              4. Site Safety & Access
            </h2>
            <p>
              Clients must ensure safe and unrestricted access to the project site for heavy machinery. The client is responsible for identifying underground utility lines (water pipelines, electrical cables) prior to commencement of excavation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              5. Contact Information
            </h2>
            <p>
              For legal or contractual inquiries, reach out to our management team:
            </p>
            <div className="mt-3 p-4 bg-[#0A0A0A] border border-white/10 rounded-xl space-y-1 font-mono text-xs sm:text-sm text-gray-300">
              <p><strong className="text-white">Email:</strong> prashanthvk494@gmail.com</p>
              <p><strong className="text-white">Phone:</strong> +91 8179675631 / +91 8008543529</p>
              <p><strong className="text-white">WhatsApp:</strong> +91 8499014721</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  </>
  );
}
