import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../content/siteContent";
import { withBasePath } from "../lib/paths";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-b-[#00458b]/10 bg-white/92 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-2.5">
        <div className="flex items-center justify-between">
          <a
            href={withBasePath("/")}
            className="w-[15.25rem] shrink-0 sm:w-[18.25rem] lg:w-[19.25rem]"
            aria-label="Lampata home"
          >
            <BrandMark satelliteMode="orbit" />
          </a>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[1.02rem] font-extrabold text-[#00458b]/92 transition-colors hover:font-extrabold hover:text-[#00458b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={withBasePath("/#contact")}
              className="brand-gold-button inline-flex items-center gap-2 rounded-full px-5 py-[0.55rem] text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-[#00458b]/10 p-1.5 text-[#00458b]/82 transition-colors hover:text-[#00458b] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="panel-surface mt-4 flex flex-col gap-4 rounded-[1.5rem] p-5 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#00458b]/8 pb-3 text-[1.02rem] font-extrabold text-[#00458b]/92 transition-colors hover:font-extrabold hover:text-[#00458b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={withBasePath("/#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00458b] px-5 py-3 text-center text-white"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
