import { ArrowUpRight } from "lucide-react";
import { navItems } from "../content/sharedContent";
import { withBasePath } from "../lib/paths";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="bg-[#00458b]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-xl">
            <BrandMark variant="light" className="mb-5 w-[22rem] sm:w-[27rem]" />
            <p className="text-base leading-7 text-white/60">
              We help teams turn geo-spatial data into decision-ready intelligence using
              earth observation, open-science methods, and production-minded engineering.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p
                className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/50"
                style={{ borderLeft: "3px solid var(--brand-gold-medium)", paddingLeft: "0.6rem" }}
              >
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p
                className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/50"
                style={{ borderLeft: "3px solid var(--brand-gold-medium)", paddingLeft: "0.6rem" }}
              >
                Start with a problem statement
              </p>
              <a
                href="mailto:contact@lampata.co.uk"
                className="inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-white/80"
              >
                contact@lampata.co.uk
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-sm leading-6 text-white/50">
                A concise note about the decision, data, and timeline is enough for a first
                conversation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-5xl text-sm leading-6 text-white/40">
            © 2020 Lampata LTD. All rights reserved. Company number 12820181.
            Wellington House, Cambridge, England, CB1 1BH.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <a
              href={withBasePath("/privacypolicy/")}
              className="transition-colors hover:text-white/72"
            >
              Privacy Policy
            </a>
            <a
              href={withBasePath("/cookie-policy/")}
              className="transition-colors hover:text-white/72"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
