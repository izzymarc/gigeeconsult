import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationType = "fade" | "slide" | "scale" | "rotate";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: AnimationDirection;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  staggerChildren?: number;
  staggerDirection?: 1 | -1;
}

export function AnimatedSection({
  children,
  className,
  direction = "up",
  type = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 50,
  staggerChildren,
  staggerDirection,
}: AnimatedSectionProps) {
  const getInitialPosition = (): Record<string, number> => {
    switch (direction) {
      case "up":
        return { y: amount };
      case "down":
        return { y: -amount };
      case "left":
        return { x: amount };
      case "right":
        return { x: -amount };
      default:
        return { y: amount };
    }
  };

  const getAnimationType = (): Variants => {
    // Base animation
    const baseVariants: Variants = {
      hidden: {
        opacity: 0,
        ...getInitialPosition(),
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
          ...(staggerChildren && {
            staggerChildren,
            staggerDirection: staggerDirection || 1,
          }),
        },
      },
    };

    // Add scale if needed
    if (type === "scale") {
      (baseVariants.hidden as any).scale = 0.8;
      (baseVariants.visible as any).scale = 1;
    }

    // Add rotation if needed
    if (type === "rotate") {
      (baseVariants.hidden as any).rotate = direction === "left" ? -10 : 10;
      (baseVariants.visible as any).rotate = 0;
    }

    // Handle fade only
    if (type === "fade") {
      baseVariants.hidden = {
        opacity: 0,
      };
      baseVariants.visible = {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
          ...(staggerChildren && {
            staggerChildren,
            staggerDirection: staggerDirection || 1,
          }),
        },
      };
    }

    return baseVariants;
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={getAnimationType()}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  type = "fade",
  amount = 30,
}: Omit<AnimatedSectionProps, "once" | "staggerChildren" | "staggerDirection">) {
  const getInitialPosition = (): Record<string, number> => {
    switch (direction) {
      case "up":
        return { y: amount };
      case "down":
        return { y: -amount };
      case "left":
        return { x: amount };
      case "right":
        return { x: -amount };
      default:
        return { y: amount };
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      ...(type === "scale" ? { scale: 0.9 } : {}),
      ...(type === "rotate" ? { rotate: direction === "left" ? -5 : 5 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(type === "scale" ? { scale: 1 } : {}),
      ...(type === "rotate" ? { rotate: 0 } : {}),
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className={className} 
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}