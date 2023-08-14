import { Button } from "@/components/button/Button";
import React from "react";
import style from "./style.module.css";
export default function Start() {
  return (
    <section className={style.start}>
      <div className={style.start__box}>
        <h1 className={style.start__title}>Get started today!</h1>
        <Button className={style.start__btn}>PICK A PLAN</Button>
      </div>
    </section>
  );
}
