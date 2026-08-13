import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "../ui/SocialIcons";
import { userInfo } from "../../data/userInfo";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "React Development",
  "UI/UX Design",
  "Performance Optimization",
  "Consulting",
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "GitHub", href: "#" },
  { label: "Resume", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Testimonials", href: "#" },
];

// TODO: replace with your real social profile URLs
const socials = [
  { label: "GitHub", icon: GithubIcon, href: userInfo.github },
  { label: "LinkedIn", icon: LinkedinIcon, href: userInfo.linkedin },
  { label: "YouTube", icon: YoutubeIcon, href: userInfo.youtube },
  { label: "Email", icon: Mail, href: userInfo.email },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="text-xl font-bold">A</span>
              </div>
              <span className="text-base font-semibold text-foreground">{userInfo.name}</span>
            </div>
            <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-muted">
              {userInfo.footerIntro}
            </p>
            <ul className="mt-5 flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                  >
                    <social.icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((service) => (
              <li key={service} className="text-sm text-muted">
                {service}
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {resources.map((resource) => (
              <li key={resource.label}>
                <a href={resource.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {resource.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          {/* newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Newsletter</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Stay updated with my latest projects and articles.
            </p>
            <form
              className="mt-4 flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault() /* TODO: wire up to your newsletter provider */}
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-10 rounded-lg border border-border bg-surface/60 px-3 text-sm text-foreground placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
              <button
                type="submit"
                className="h-10 rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted sm:flex-row">
          <p>© {year} {userInfo?.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">{children}</ul>
    </div>
  );
}
