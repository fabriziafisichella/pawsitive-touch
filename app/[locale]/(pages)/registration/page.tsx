"use client";

import style from "./registration.module.scss";
import { Button } from "../../components/Button/Button";
import { useTranslations } from "next-intl";
import { ThreeWords } from "../../components/ThreeWords/ThreeWords";
import { useRouter } from "@/navigation";

export default function Registration() {
  const t = useTranslations("Registration");
  const router = useRouter();

  return (
    <main>
      <div className={style.container}>
        <ThreeWords first={t("first")} second={t("second")} third={t("third")} />
        <div className={style.link} onClick={() => router.push("/")}>
          {t("login")}
        </div>
        <form className={style.form}>
          <label>Name</label>
          <input type="text" name="username" placeholder={t("username")} />
          <label>Password</label>
          <input type="email" name="email" placeholder={t("password")} />
          <label>Email</label>
          <input type="password" name="password" placeholder={t("email")} />
          <div className={style.link}>
            <input type="checkbox" />
            {t("tos")}
          </div>
          <Button name={t("register")} />
        </form>
      </div>
    </main>
  );
}
