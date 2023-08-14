import React from "react";
import { Container } from "../container/Container";
import Image from "next/image";
import Logo from "public/logo/NinjaMail Logo.svg";
import style from "./style.module.css";

const firstList = [
  {
    id: 1,
    title: "Features",
  },
  {
    id: 2,
    title: "Pricing",
  },
  {
    id: 3,
    title: "Services",
  },
  {
    id: 4,
    title: "Partners",
  },
];
const secondList = [
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Tutorials",
  },
  {
    id: 3,
    title: "Resources",
  },
  {
    id: 4,
    title: "Help Center",
  },
  {
    id: 5,
    title: "Templates",
  },
  {
    id: 6,
    title: "Case Studies",
  },
];
const thierdList = [
  {
    id: 1,
    title: "Medium",
  },
  {
    id: 2,
    title: "Twitter",
  },
  {
    id: 3,
    title: "Facebook",
  },
  {
    id: 4,
    title: "Instagram",
  },
  {
    id: 5,
    title: "LinkedIn",
  },
];
const foursList = [
  {
    id: 1,
    title: "Contact Us",
  },
  {
    id: 2,
    title: "Slack",
  },
  {
    id: 3,
    title: "Jobs",
  },
];

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__box}>
          <a href="#">
            <Image src={Logo} width={269} height={81} alt="Ninja-mail" />
          </a>
          <div className={style.list__box}>
            <ul className={style.list}>
              {firstList.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <ul className={style.list}>
              {secondList.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <ul className={style.list}>
              {thierdList.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <ul className={style.list}>
              {foursList.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
