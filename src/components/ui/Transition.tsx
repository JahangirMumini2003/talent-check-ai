
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-in" | "fade-up" | "scale-in" | "slide-in-right" | "blur-in";
  once?: boolean;
}

const Transition: React.FC<TransitionProps> = ({
  children,
  className,
  delay = 0,
  duration = 500,
  animation = "fade-up",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-up":
        return "animate-fade-up";
      case "scale-in":
        return "animate-scale-in";
      case "slide-in-right":
        return "animate-slide-in-right";
      case "blur-in":
        return "animate-blur-in";
      default:
        return "animate-fade-up";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? getAnimationClass() : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

export default Transition;
