"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import Logo from "public/logo/logo.svg";
import style from "./style.module.css";
import Image from "next/image";
import { Button } from "../button/Button";
import BurgerButton from "./BurgerButton";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "FEATURES",
  },
  {
    id: 2,
    title: "PRICING",
  },
  {
    id: 3,
    title: "SERVICES",
  },
  {
    id: 4,
    title: "PARTNERS",
  },
];

const XAnimations = {
  hidden: { opacity: 0, x: 400 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};
const XAnimationsOposite = {
  hidden: { opacity: 0, x: -300 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <motion.header
      className={style.header}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <div className={style.flex__group}>
          <motion.a
            className={style.logo}
            href="#"
            variants={XAnimationsOposite}
            custom={1}
          >
            <Image src={Logo} width={150} height={81} alt="Ninja-mail" />
          </motion.a>
          <nav
            className={`${style.nav} ${activeState ? style.menu_active : ""}`}
          >
            <ul className={style.nav__list}>
              {data.map((item) => {
                return (
                  <motion.li
                    className={style.list__item}
                    key={item.id}
                    variants={XAnimations}
                    custom={item.id}
                  >
                    <a className={style.item__link} href="#">
                      {item.title}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <Button>SIGN UP FREE</Button>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </motion.header>
  );
}
