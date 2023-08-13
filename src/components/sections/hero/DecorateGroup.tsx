import React from "react";
import Gravity from "@/components/gravity/Gravity";
import style from "./style.module.css";
export default function DecorateGroup() {
  return (
    <div className={style.flex}>
      <Gravity className={style.pos__one}>
        <div className={style.decor__one}></div>
      </Gravity>
      <Gravity className={style.pos__two}>
        <div className={style.decor__two}></div>
      </Gravity>
      <Gravity className={style.pos__three}>
        <div className={style.decor__three}></div>
      </Gravity>
      <Gravity className={style.pos__four}>
        <div className={style.decor__four}></div>
      </Gravity>
      <Gravity className={style.pos__five}>
        <div className={style.decor__five}></div>
      </Gravity>
      <Gravity className={style.pos__six}>
        <div className={style.decor__six}></div>
      </Gravity>
      <Gravity className={style.pos__seven}>
        <div className={style.decor__seven}></div>
      </Gravity>
    </div>
  );
}
