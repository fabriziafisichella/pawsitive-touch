"use client";

import style from "./profile.module.scss";
import { useRouter } from "@/navigation";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";

export default function Profile() {
  const router = useRouter();
  const { setIsLogged } = useContext(globalContext);

  return (
    <main>
      <div className={style.link} onClick={() => router.push("/")}>
        Go back to first page
      </div>
      <div
        className={style.link}
        onClick={() => {
          setIsLogged(false);
          router.push("/");
        }}
      >
        Go back changing status
      </div>
    </main>
  );
}
