"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "@/components/container/Container";
import Image from "next/image";
import Gravity from "@/components/gravity/Gravity";
import MotionSection from "@/components/motionSection/MotionSection";
import { motion } from "framer-motion";
const data = [
  {
    id: 1,
    src: "/brands/brand-one.svg",
    witdh: 160,
    heugth: 33,
    alt: "last  king",
  },
  {
    id: 2,
    src: "/brands/brand-two.svg",
    witdh: 85,
    heugth: 44,
    alt: "dragon aye",
  },
  {
    id: 3,
    src: "/brands/brand-three.svg",
    witdh: 145,
    heugth: 48,
    alt: "quest ai",
  },
  {
    id: 4,
    src: "/brands/brand-four.svg",
    witdh: 141,
    heugth: 25,
    alt: "radio tee",
  },
  {
    id: 5,
    src: "/brands/brand-five.svg",
    witdh: 138,
    heugth: 22,
    alt: "game comerce",
  },
];

const YAnimations = {
  hidden: { opacity: 0, y: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const XAnimationsOposit = {
  hidden: { opacity: 0, x: -400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function Brands() {
  return (
    <MotionSection className={style.brands}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.h4
            className={style.brands__title}
            variants={YAnimations}
            custom={1}
          >
            All the best brands already use us.
          </motion.h4>
          <ul className={style.brands__list}>
            {data.map((item) => {
              return (
                <Gravity key={item.id}>
                  <motion.li
                    className={style.list__item}
                    variants={XAnimationsOposit}
                    custom={item.id}
                  >
                    <Image
                      src={item.src}
                      width={item.witdh}
                      height={item.heugth}
                      alt={item.alt}
                    />
                  </motion.li>
                </Gravity>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
