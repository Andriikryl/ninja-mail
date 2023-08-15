"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface IMotionSection {
  className: string;
  children: React.ReactNode;
}

export default function MotionSection({ className, children }: IMotionSection) {
  const turgetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: turgetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return (
    <motion.section
      className={className}
      style={{ opacity, scale }}
      ref={turgetRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
