"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Contact Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Quote Requests", href: "/admin/quotes", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#080808] text-white overflow-hidden font-sans">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex ${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-[#121212] border-r border-white/10 flex-col shrink-0 relative z-20`}
        aria-label="Admin Sidebar Navigation"
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          {sidebarOpen && (
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wider uppercase text-[#F4B400] font-mono">
                AEM Admin
              </span>
            </Link>
          )}
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white mx-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]"
          >
            <ChevronLeft
              size={20}
              className={`transition-transform duration-300 ${
                !sidebarOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400] ${
                  isActive
                    ? "bg-[#F4B400] text-black font-semibold shadow-[0_2px_12px_rgba(244,180,0,0.3)]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
                title={!sidebarOpen ? item.name : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                <item.icon size={18} className="shrink-0" />
                {sidebarOpen && <span className="truncate">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-white/10">
          <button
            type="button"
            className="flex items-center gap-3.5 px-3.5 py-2.5 w-full text-rose-400 hover:bg-rose-500/10 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <LogOut size={18} className="shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        {/* Header Bar */}
        <header className="h-16 bg-[#121212] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Management Portal
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F4B400] text-black font-bold text-xs flex items-center justify-center shadow-md">
              AD
            </div>
            <span className="font-medium text-xs text-gray-300 hidden sm:inline">
              Admin User
            </span>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#080808]">
          {children}
        </div>
      </main>
    </div>
  );
}
