"use client";

import style from "./logo.module.scss";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Logo() {
    const t = useTranslations("ImageAlt");
    
  return (
    <div className={style.logo}>
      <Image src={logo} alt={`${t("logo")}`} fill={false} priority={true} />

      <div className={style.title}>
        <div className={style.pawsitive}>
          <span className={style.paw}>PAW</span>
          <span className={style.sitive}>sitive</span>
        </div>

        <div className={style.touch}>Touch</div>
      </div>
    </div>
  );
}
