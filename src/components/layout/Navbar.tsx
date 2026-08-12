import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { useTheme } from "../../hooks/useTheme";

type NavItem = {
  label: string;
  id: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Projects",
    id: "projects",
  },
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Blog",
    id: "blog",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { resolvedTheme, toggleTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
   * ----------------------------------------
   * Scroll to section
   * ----------------------------------------
   */
  const scrollToSection = (id: string) => {
    setMobileOpen(false);

    // If we're on another route, go home first.
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        `#${id}`
      );
    } else {
      /*
       * Sections don't exist yet.
       * We still update the URL so navigation
       * already works when you add the sections.
       */
      window.history.replaceState(
        null,
        "",
        `#${id}`
      );
    }
  };

  /*
   * ----------------------------------------
   * Handle initial hash
   * ----------------------------------------
   */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const timeout = window.setTimeout(() => {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [location.pathname]);

  /*
   * ----------------------------------------
   * Detect active section
   * ----------------------------------------
   */
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = navItems
      .filter((item) => item.id !== "blog")
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, [location.pathname]);

  /*
   * ----------------------------------------
   * Escape closes mobile menu
   * ----------------------------------------
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);

  /*
   * ----------------------------------------
   * Prevent body scroll when mobile menu open
   * ----------------------------------------
   */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6">
        <nav
          className="
            mx-auto
            flex
            h-[58px]
            max-w-[1200px]
            items-center
            justify-between
            rounded-[16px]
            border
            border-border/80
            bg-background/80
            px-3
            shadow-[0_12px_40px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
          "
        >

          {/* --------------------------------
              DESKTOP NAVIGATION
          -------------------------------- */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
                                    {/* --------------------------------
              LOGO
          -------------------------------- */}
          <Link
            to="/"
            onClick={() => {
              setMobileOpen(false);

              if (location.pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="
              group
              flex
              shrink-0
              items-center
              gap-2.5
              outline-none
            "
            aria-label="Amrutansu - Home"
          >
            {/* Replace this with your actual logo if you have one */}
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <span className="text-xl font-bold">
                A
              </span>
            </div>

          </Link>
              {navItems.map((item) => {
                const isBlog = item.id === "blog";
                const isActive =
                  activeSection === item.id;

      if (isBlog) {
  return (
    <Link
      key={item.id}
      to="/blog"
      onClick={() => setMobileOpen(false)}
      className={`
        rounded-[10px]
        px-4
        py-2.5
        text-[13px]
        outline-none
        transition-all
        duration-200
        ease-out

        ${
          location.pathname === "/blog"
            ? `
              bg-surface-secondary
              text-foreground
              shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            `
            : `
              text-muted
              hover:bg-surface-secondary
              hover:text-foreground
            `
        }
      `}
    >
      {item.label}
    </Link>
  );
}

                return (
  <button
    key={item.id}
    type="button"
    onClick={() => scrollToSection(item.id)}
    className={`
      rounded-[10px]
      px-3.5
      py-2.5
      text-[13px]
      outline-none
      transition-all
      duration-200
      ease-out
        hover: cursor-pointer
      ${
        isActive
          ? `
            bg-surface-secondary
            text-foreground
            shadow-[0_0_20px_rgba(139,92,246,0.08)]
          `
          : `
            text-muted
            hover:bg-surface-secondary
            hover:text-foreground
          `
      }
    `}
  >
    {item.label}
  </button>
);
              })}
            </div>
          </div>

          {/* --------------------------------
              DESKTOP ACTIONS
          -------------------------------- */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[10px]
                border
                border-border
                bg-surface/50
                text-muted
                transition-all
                duration-300
                hover:border-primary/40
                hover:bg-primary/10
                hover:text-foreground
              "
            >
              {resolvedTheme === "dark" ? (
                <Sun
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              ) : (
                <Moon
                  size={17}
                  className="transition-transform duration-300 group-hover:-rotate-12"
                />
              )}
            </button>

            {/* Hire Me */}
            <button
              type="button"
              onClick={() =>
                scrollToSection("contact")
              }
              className="
                group
                ml-1
                flex
                h-10
                items-center
                gap-2
                rounded-[10px]
                border
                border-primary/50
                bg-primary/10
                px-4
                text-sm
                font-semibold
                text-foreground
                shadow-[0_0_20px_rgba(139,92,246,0.12)]
                transition-all
                duration-300
                hover:border-primary
                hover:bg-primary/20
                hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
              "
            >
              <ArrowUpRight
                size={15}
                className="
                  text-primary
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

              Hire Me
            </button>
          </div>

          {/* --------------------------------
              MOBILE ACTIONS
          -------------------------------- */}
                    <Link
            to="/"
            onClick={() => {
              setMobileOpen(false);

              if (location.pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="
              group
              flex
              shrink-0
              items-center
              gap-2.5
              outline-none
              lg:hidden
            "
            aria-label="Amrutansu - Home"
          >
            {/* Replace this with your actual logo if you have one */}
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <span className="text-xl font-bold">
                A
              </span>
            </div>

          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-surface/50
                text-foreground
                transition-all
                hover:border-primary/40
                hover:bg-primary/10
              "
            >
              {resolvedTheme === "dark" ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-surface/50
                text-foreground
                transition-all
                hover:border-primary/40
                hover:bg-primary/10
              "
            >
              {mobileOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* --------------------------------
          MOBILE MENU
      -------------------------------- */}
      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden
          ${
            mobileOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className={`
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm
            transition-opacity
            duration-300
            ${
              mobileOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* Menu panel */}
        <div
          className={`
            absolute
            left-4
            right-4
            top-[92px]
            mx-auto
            max-w-[1440px]
            overflow-hidden
            rounded-[22px]
            border
            border-border
            bg-background/95
            p-3
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300
            ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }
          `}
        >
          <div className="flex flex-col">
            {navItems.map((item) => {
              const isBlog = item.id === "blog";

              if (isBlog) {
                return (
                  <Link
                    key={item.id}
                    to="/blog"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-muted
                      transition-colors
                      hover:bg-primary/10
                      hover:text-foreground
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      size={16}
                      className="text-primary"
                    />
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-left
                    text-sm
                    font-medium
                    text-muted
                    transition-colors
                    hover:bg-primary/10
                    hover:text-foreground
                  "
                >
                  {item.label}

                  <ArrowUpRight
                    size={16}
                    className="text-primary"
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Hire Me */}
          <div className="mt-2 border-t border-border pt-2">
            <button
              type="button"
              onClick={() =>
                scrollToSection("contact")
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-4
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(139,92,246,0.25)]
                transition-all
                hover:bg-primary-hover
              "
            >
              <ArrowUpRight size={16} />

              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}