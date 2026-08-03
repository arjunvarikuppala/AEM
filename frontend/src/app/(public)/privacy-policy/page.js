export const metadata = {
  title: "Privacy Policy | Aadhya Earth Movers",
  description: "Privacy Policy for Aadhya Earth Movers. Learn how we collect, use, and protect your personal information when requesting earthmoving services in Hyderabad.",
  openGraph: {
    title: "Privacy Policy | Aadhya Earth Movers",
    description: "Privacy Policy for Aadhya Earth Movers earthmoving & infrastructure services.",
    url: "https://aadhyaearthmovers.com/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://aadhyaearthmovers.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Privacy <span className="text-[#F4B400]">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Last Updated: August 2026
          </p>
        </div>

        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              1. Introduction
            </h2>
            <p>
              Aadhya Earth Movers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or inquire about our earthmoving, rock breaking, road grading, and equipment rental services in Hyderabad, Telangana.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              2. Information We Collect
            </h2>
            <p className="mb-3">We collect personal information that you voluntarily provide to us when submitting inquiries or requesting quotes. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Full Name</li>
              <li>Phone Number and Mobile Contact</li>
              <li>Email Address</li>
              <li>Project Location and Site Requirements</li>
              <li>Estimated Project Budget and Timelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Respond to your service inquiries and provide accurate cost estimates.</li>
              <li>Schedule site inspections and deploy heavy machinery equipment.</li>
              <li>Communicate updates regarding ongoing project execution.</li>
              <li>Comply with applicable legal and statutory obligations in India.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              4. Data Protection & Security
            </h2>
            <p>
              We implement reasonable industry-standard physical and technical security measures to maintain the safety of your personal information. We do not sell, trade, or rent your personal contact information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 text-[#F4B400]">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 p-4 bg-[#0A0A0A] border border-white/10 rounded-xl space-y-1 font-mono text-xs sm:text-sm text-gray-300">
              <p><strong className="text-white">Email:</strong> prashanthvk494@gmail.com</p>
              <p><strong className="text-white">Phone:</strong> +91 8179675631 / +91 8008543529</p>
              <p><strong className="text-white">WhatsApp:</strong> +91 8499014721</p>
              <p><strong className="text-white">Location:</strong> Hyderabad, Telangana, India</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
