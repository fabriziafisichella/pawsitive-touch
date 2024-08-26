"use client";

import style from "./login.module.scss";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { Button } from "../Button/Button";
import { FcGoogle } from "react-icons/fc";


export function Login() {
  
  const t = useTranslations("HomePage");
  const router = useRouter(); 
  

  const handleRegister = () => {
    router.push("/registration");
  };

  const handleRecovery = () => {
    router.push("/recovery")
  }

  return (
    <div className={style.container}>
      <form className={style.form} autoComplete="off">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
        <div className={style.forgot} onClick={handleRecovery}>{t("forgot")}</div>

        <Button name="Login" />
      </form>
      <div className={style.button}>
        <FcGoogle className={style.icon} />
        {t("google")}
      </div>
      <div className={style.button} onClick={handleRegister}>
        {t("email")}
      </div>
    </div>
  );
}
