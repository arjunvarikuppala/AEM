import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = createMetadata({
  title: "Disclaimer | Aadhya Earth Movers",
  description: "Website and operational Disclaimer for Aadhya Earth Movers earthmoving services in Hyderabad, Telangana.",
  pathname: "/disclaimer",
  keywords: "disclaimer, legal notice, terms, information accuracy, aadhya earth movers"
});

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disclaimer", href: "/disclaimer" }]} />
      <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Operational <span className="text-[#F4B400]">Disclaimer</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Last Updated: August 2026
            </p>
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
                1. General Website Information
              </h2>
              <p>
                The information provided on this website by Aadhya Earth Movers is for general informational purposes only. While we endeavor to keep specifications and imagery accurate and up to date, we make no representations or warranties of any kind about completeness or reliability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
                2. Technical & Machinery Specifications
              </h2>
              <p>
                Equipment models, operational capacities, and specs displayed across our website may vary depending on site terrain, weather conditions, or specific fleet configuration deployed on site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
                3. External Links & Communications
              </h2>
              <p>
                Direct communications via telephone, email, or official WhatsApp links (+91 8499014721) connect directly to authorized representatives of Aadhya Earth Movers. We are not responsible for unofficial communications or unauthorized third-party links.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
                4. Contact Us
              </h2>
              <p>
                If you have any questions concerning this Disclaimer, please reach out to us:
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
