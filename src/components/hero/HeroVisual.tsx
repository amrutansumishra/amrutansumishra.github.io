import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Atom, Wind, MousePointer2 } from "lucide-react";

import profileImage from "../../assets/profile.png";

const floatingBadges = [
  {
    label: "TS",
    top: "7%",
    left: "76%",
    color: "#3178c6",
    glow: "rgba(49,120,198,0.45)",
  },
  {
    label: "JS",
    top: "70%",
    left: "84%",
    color: "#f7df1e",
    glow: "rgba(247,223,30,0.35)",
  },
  {
    icon: Atom,
    top: "10%",
    left: "7%",
    color: "#61dafb",
    glow: "rgba(97,218,251,0.35)",
  },
  {
    icon: Wind,
    top: "42%",
    left: "-2%",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.35)",
  },
];

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const rotateX = useTransform(
    springY,
    [-300, 300],
    [5, -5]
  );

  const rotateY = useTransform(
    springX,
    [-300, 300],
    [-5, 5]
  );

  const imageX = useTransform(
    springX,
    [-300, 300],
    [-8, 8]
  );

  const imageY = useTransform(
    springY,
    [-300, 300],
    [-8, 8]
  );

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (shouldReduceMotion) return;

    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      event.clientX -
        rect.left -
        rect.width / 2
    );

    mouseY.set(
      event.clientY -
        rect.top -
        rect.height / 2
    );
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        mx-auto
        h-[520px]
        w-full
        max-w-[620px]
        sm:h-[560px]
        lg:h-[600px]
      "
      style={{
        perspective: "1200px",
      }}
    >
      {/* =====================================================
          AMBIENT BACKGROUND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[72%]
          w-[72%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[90px]
        "
        style={{
          background:
            "radial-gradient(ellipse at center, var(--hero-glow-strong) 0%, var(--hero-glow-medium) 35%, transparent 70%)",
        }}
      />

      {/* Secondary glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[35%]
          top-[22%]
          h-[35%]
          w-[35%]
          rounded-full
          bg-violet-500/20
          blur-[70px]
        "
      />

      {/* =====================================================
          ORBIT SYSTEM
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[86%]
          w-[86%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
        "
                style={{
  borderColor: "var(--orbit-color)",
}}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[72%]
          w-[72%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
        "
                style={{
  borderColor: "var(--orbit-color)",
}}
      />

      {/* =====================================================
          SMALL ORBIT PARTICLES
      ====================================================== */}

      <div
        className="
          absolute
          left-[78%]
          top-[19%]
          h-2
          w-2
          rounded-full
          bg-violet-300
          shadow-[0_0_16px_5px_rgba(167,139,250,0.7)]
        "
      />

      <div
        className="
          absolute
          left-[87%]
          top-[46%]
          h-1.5
          w-1.5
          rounded-full
          bg-purple-300
          shadow-[0_0_14px_4px_rgba(168,85,247,0.7)]
        "
      />

      <div
        className="
          absolute
          left-[14%]
          top-[32%]
          h-1.5
          w-1.5
          rounded-full
          bg-violet-300
          shadow-[0_0_14px_4px_rgba(167,139,250,0.6)]
        "
      />

      <div
        className="
          absolute
          left-[76%]
          top-[75%]
          h-1.5
          w-1.5
          rounded-full
          bg-purple-300
          shadow-[0_0_14px_4px_rgba(168,85,247,0.65)]
        "
      />

      {/* =====================================================
          MAIN 3D GROUP
      ====================================================== */}

      <motion.div
        className="
          absolute
          inset-0
          [transform-style:preserve-3d]
        "
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
              }
        }
      >
{/* =====================================================
    PREMIUM HEXAGON
===================================================== */}

<div
  className="
    absolute
    left-1/2
    top-[12%]
    h-[75%]
    w-[70%]
    -translate-x-1/2
  "
>
  {/* -----------------------------------------------
      LARGE ATMOSPHERIC GLOW
  ------------------------------------------------ */}

  <div
    aria-hidden="true"
    className="
      absolute
      -inset-[8%]
      rounded-[40%]
      opacity-70
      blur-[55px]
    "
    style={{
      background:
        "radial-gradient(ellipse at center, rgba(139,92,246,0.42) 0%, rgba(109,40,217,0.20) 38%, transparent 72%)",
    }}
  />

  {/* -----------------------------------------------
      HEXAGON GLASS BACKGROUND
  ------------------------------------------------ */}

  <div
    className="
      absolute
      inset-0
      overflow-hidden
    "
    style={{
      clipPath:
        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",

      background: "var(--hex-bg)",

      boxShadow:
        "inset 0 0 70px rgba(139,92,246,0.18)",
    }}
  >
    {/* Inner glass lighting */}

    <div
      aria-hidden="true"
      className="
        absolute
        inset-0
        bg-gradient-to-br
        from-white/[0.07]
        via-transparent
        to-violet-500/[0.08]
      "
    />

    {/* Central purple atmosphere */}

    <div
      aria-hidden="true"
      className="
        absolute
        left-1/2
        top-[40%]
        h-[65%]
        w-[70%]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-violet-500/[0.12]
        blur-[65px]
      "
    />

    {/* Bottom darkening */}

    <div
      aria-hidden="true"
      className="
        absolute
        inset-x-0
        bottom-0
        h-[40%]
        bg-gradient-to-t
        from-[#080b18]/80
        via-[#080b18]/20
        to-transparent
      "
    />

    {/* Very subtle inner highlight */}

    <div
      aria-hidden="true"
      className="
        absolute
        left-[15%]
        top-[15%]
        h-[45%]
        w-[35%]
        rounded-full
        bg-purple-400/[0.08]
        blur-[45px]
      "
    />
  </div>


  {/* =================================================
      PORTRAIT
      IMPORTANT:
      Portrait is clipped to the SAME hexagon.
      This prevents the jacket from escaping below it.
  ================================================== */}

  <motion.div
    className="
      absolute
      inset-0
      overflow-hidden
    "
    style={{
      clipPath:
        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    }}
  >
    <motion.img
      src={profileImage}
      alt="Amru Mi"
      className="
        absolute
        left-[54%]
        top-[4%]
        h-[103%]
        w-[103%]
        max-w-none
        -translate-x-1/2
        object-contain
        object-bottom
      "
      style={{
        x: shouldReduceMotion ? 0 : imageX,
        y: shouldReduceMotion ? 0 : imageY,
      }}
    />

    {/* Portrait bottom fade */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        h-[18%]
        bg-gradient-to-t
        from-[#090c19]/70
        to-transparent
      "
    />
  </motion.div>


  {/* =================================================
      NEON HEXAGON FRAME
      This sits ABOVE the portrait.
  ================================================== */}

  <svg
    aria-hidden="true"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="
      pointer-events-none
      absolute
      inset-0
      h-full
      w-full
      overflow-visible
    "
  >
    <defs>

      {/* Main purple gradient */}

      <linearGradient
        id="hexGradient"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
      >
        <stop
          offset="0%"
          stopColor="#c084fc"
        />

        <stop
          offset="35%"
          stopColor="#a855f7"
        />

        <stop
          offset="70%"
          stopColor="#7c3aed"
        />

        <stop
          offset="100%"
          stopColor="#60a5fa"
        />
      </linearGradient>


      {/* Glow filter */}

      <filter
        id="hexGlow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          stdDeviation="2.2"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>


      {/* Strong glow */}

      <filter
        id="hexStrongGlow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          stdDeviation="4"
          result="blur"
        />

        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

    </defs>


    {/* Wide atmospheric glow */}

    <polygon
      points="50,0 100,25 100,75 50,100 0,75 0,25"
      fill="none"
      stroke="#8b5cf6"
      strokeWidth="2.5"
      opacity="0.22"
      filter="url(#hexStrongGlow)"
      vectorEffect="non-scaling-stroke"
    />


    {/* Main neon border */}

    <polygon
      points="50,0 100,25 100,75 50,100 0,75 0,25"
      fill="none"
      stroke="url(#hexGradient)"
      strokeWidth="0.8"
      strokeLinejoin="round"
      filter="url(#hexGlow)"
      vectorEffect="non-scaling-stroke"
    />


    {/* Thin highlight */}

    <polygon
      points="50,0 100,25 100,75 50,100 0,75 0,25"
      fill="none"
      stroke="rgba(255,255,255,0.16)"
      strokeWidth="0.22"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />

  </svg>
</div>


        {/* =================================================
            FLOATING TECHNOLOGY BADGES
        ================================================== */}

        {floatingBadges.map(
          (badge, index) => {
            const Icon = badge.icon;

            return (
              <motion.div
                key={index}
                className="
                  absolute
                  z-20
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[14px]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                "
                style={{
                  top: badge.top,
                  left: badge.left,
                  background: "var(--code-card-bg)",
                  borderColor: "var(--code-card-border)",
                  boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.08),
                    0 12px 30px rgba(0,0,0,0.35),
                    0 0 22px ${badge.glow}
                  `,
                }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                        rotate: [0, 2, 0],
                      }
                }
                transition={{
                  duration:
                    3.5 + index * 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.25,
                }}
              >
                {Icon ? (
                  <Icon
                    size={22}
                    style={{
                      color: badge.color,
                      filter: `drop-shadow(0 0 7px ${badge.glow})`,
                    }}
                  />
                ) : (
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: badge.color,
                      textShadow: `0 0 10px ${badge.glow}`,
                    }}
                  >
                    {badge.label}
                  </span>
                )}
              </motion.div>
            );
          }
        )}

        {/* =================================================
            CURSOR DECORATION
        ================================================== */}

        <motion.div
          aria-hidden="true"
          className="
            absolute
            right-[13%]
            top-[59%]
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-violet-400/20
            bg-violet-500/10
            text-violet-300
            shadow-[0_0_25px_rgba(139,92,246,0.35)]
            backdrop-blur-md
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MousePointer2 size={19} />
        </motion.div>
      </motion.div>

      {/* =====================================================
          CODE GLASS CARD
      ====================================================== */}

<motion.div
  className="
    absolute
    bottom-[4%]
    left-1/2
    z-30
    w-[280px]
    -translate-x-1/2
    overflow-hidden
    rounded-[22px]
    border
    p-4
    font-mono
    text-[10px]
    leading-[1.85]
    backdrop-blur-2xl
    sm:w-[300px]
    sm:p-5
    sm:text-[11px]
  "
  style={{
    background: "var(--code-card-bg)",
    borderColor: "var(--code-card-border)",
    boxShadow: "var(--code-card-shadow)",
  }}
  animate={
    shouldReduceMotion
      ? undefined
      : {
          y: [0, -5, 0],
        }
  }
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* ================================================
      TOP GLASS HIGHLIGHT
  ================================================= */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-primary/30
      to-transparent
    "
  />

  {/* ================================================
      SUBTLE PURPLE LIGHT
  ================================================= */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-10
      -top-10
      h-24
      w-24
      rounded-full
      bg-primary/10
      blur-3xl
    "
  />

  {/* ================================================
      CODE
  ================================================= */}

  <div className="relative">
    {/* const developer = { */}

    <div
      style={{
        color: "var(--code-punctuation)",
      }}
    >
      <span
        style={{
          color: "var(--code-keyword)",
        }}
      >
        const
      </span>{" "}
      developer = {"{"}
    </div>

    {/* name */}

    <div
      className="pl-4"
      style={{
        color: "var(--code-property)",
      }}
    >
      name:{" "}
      <span
        style={{
          color: "var(--code-string)",
        }}
      >
        'Amru Mi'
      </span>
      ,
    </div>

    {/* role */}

    <div
      className="pl-4"
      style={{
        color: "var(--code-property)",
      }}
    >
      role:{" "}
      <span
        style={{
          color: "var(--code-string)",
        }}
      >
        'Frontend Developer'
      </span>
      ,
    </div>

    {/* stack */}

    <div
      className="pl-4"
      style={{
        color: "var(--code-property)",
      }}
    >
      stack:{" "}
      <span
        style={{
          color: "var(--code-string)",
        }}
      >
        'React'
      </span>
      ,
    </div>

    {/* focus */}

    <div
      className="pl-4"
      style={{
        color: "var(--code-property)",
      }}
    >
      focus:{" "}
      <span
        style={{
          color: "var(--code-string)",
        }}
      >
        'UI & Performance'
      </span>
    </div>

    {/* closing bracket */}

    <div
      style={{
        color: "var(--code-punctuation)",
      }}
    >
      {"}"}
    </div>
  </div>
</motion.div>
    </div>
  );
}