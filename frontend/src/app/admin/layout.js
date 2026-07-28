"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, FileText, Settings, LogOut, Menu, X } from "lucide-react";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Contact Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Quote Requests", href: "/admin/quotes", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-[#111111] border-r border-white/5 flex flex-col`}
      >
        <div className="h-20 flex items-center justify-between px-4 border-b border-white/5">
          {sidebarOpen && (
            <span className="font-bold text-xl tracking-wider uppercase text-[#F4B400]">AEM Admin</span>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
            <Menu size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-[#F4B400] text-black font-semibold" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={20} className="shrink-0" />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-4 px-4 py-3 w-full text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut size={20} className="shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-[#111111] border-b border-white/5 flex items-center justify-end px-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F4B400] text-black font-bold flex items-center justify-center">
              AD
            </div>
            <span className="font-semibold text-sm">Admin User</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#050505]">
          {children}
        </div>
      </main>
    </div>
  );
}
