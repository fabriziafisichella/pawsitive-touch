"use client";

import style from "./recovery.module.scss";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import { Button } from "../../components/Button/Button";
import { ThreeWords } from "../../components/ThreeWords/ThreeWords";

export default function Recovery() {
  const t = useTranslations("Recovery");
  const router = useRouter();
  return (
    <main>
      <div className={style.container}>
        <ThreeWords
          first={t("first")}
          second={t("second")}
          third={t("third")}
        />
        <div className={style.link} onClick={() => router.push("/")}>
          {t("goback")}
        </div>

        <form className={style.form}>
          <label>Email</label>
          <input type="email" name="email" placeholder={t("placeholder")} />
          <Button name={t("recovery")} />
        </form>
      </div>
    </main>
  );
}
