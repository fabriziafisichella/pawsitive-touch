"use client";

import style from "./logo.module.scss";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ThreeWords } from "../ThreeWords/ThreeWords";

export function Logo() {
  const t = useTranslations("ImageAlt");

  return (
    <div className={style.logo}>
      <Image src={logo} alt={`${t("logo")}`} fill={false} priority={true} />

      <ThreeWords first="Paw" second="Sitive" third="Touch" />
    </div>
  );
}
