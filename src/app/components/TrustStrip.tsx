import { motion } from "motion/react";
import { partnerLogos } from "../content/siteContent";
import esaSiteLogo from "../../assets/logos/esa-site-logo.svg";
import esaTitleLogo from "../../assets/logos/esa-title-logo.svg";
import ogcSiteLogo from "../../assets/logos/ogc-site-logo.svg";
import pangeoLogo from "../../assets/logos/pangeo-logo.png";
import { cn } from "./ui/utils";

interface TrustStripProps {
  className?: string;
}

export function TrustStrip({ className }: TrustStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.32 }}
      className={cn("flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center md:gap-x-4 md:gap-y-2.5 lg:flex-nowrap", className)}
    >
      <p className="font-brand whitespace-nowrap text-[1.25rem] font-bold uppercase leading-none tracking-[-0.06em] text-[#00458b] sm:text-[1.55rem]">
        Trusted <span className="brand-gold-text">By:</span>
      </p>

      <div className="grid w-full gap-1 md:w-auto md:flex md:flex-wrap md:items-center md:gap-x-4 md:gap-y-2.5 lg:flex-nowrap">
        {partnerLogos.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.38 + index * 0.08 }}
            className="w-full max-w-[10.5rem] md:w-auto md:max-w-none md:shrink-0"
            aria-label={partner.label}
          >
            {partner.id === "esa" ? (
              <div className="flex h-[3.7rem] w-full flex-col items-start justify-center gap-1 text-left md:h-[5rem] md:w-[11.5rem] md:items-center md:gap-1.5 md:text-center">
                <img
                  src={esaSiteLogo}
                  alt="ESA"
                  className="h-6 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] md:h-8"
                  loading="lazy"
                />
                <img
                  src={esaTitleLogo}
                  alt="European Space Agency"
                  className="h-2.5 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] md:h-2.5"
                  loading="lazy"
                />
              </div>
            ) : partner.id === "ogc" ? (
              <div className="flex h-[3.7rem] w-full items-center justify-start md:h-[5rem] md:w-[11.5rem] md:justify-center">
                <img
                  src={ogcSiteLogo}
                  alt={partner.label}
                  className="h-6.5 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] md:h-9"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex h-[3.7rem] w-full items-center justify-start md:h-[5rem] md:w-[11.5rem] md:justify-center">
                <img
                  src={pangeoLogo}
                  alt={partner.label}
                  className="h-7 w-auto object-contain md:h-9.5"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
