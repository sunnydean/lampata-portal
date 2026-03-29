import { withBasePath } from "../lib/paths";
import type { NavItem } from "./siteContent";

export const navItems: NavItem[] = [
  { label: "About Us", href: withBasePath("/#who-we-are") },
  { label: "Tech Stack", href: withBasePath("/#tech-stack") },
  { label: "Case Studies", href: withBasePath("/#case-studies") },
  { label: "Open Science", href: withBasePath("/#open-science") },
];
