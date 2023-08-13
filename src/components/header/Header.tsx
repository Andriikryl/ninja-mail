import React from "react";
import { Container } from "../container/Container";
import Logo from "public/logo/NinjaMail Logo.svg";
import style from "./style.module.css";
import Image from "next/image";
import { Button } from "../button/Button";

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

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.flex__group}>
          <a className={style.logo} href="#">
            <Image src={Logo} width={269} height={81} alt="Ninja-mail" />
          </a>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              {data.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    <a className={style.item__link} href="#">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button>SIGN UP FREE</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
