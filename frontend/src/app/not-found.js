import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        <h1 className="text-8xl font-black text-[#F4B400] mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4B400] text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-[#d69f00] transition-colors"
        >
          <ArrowLeft size={18} /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
