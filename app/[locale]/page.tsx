"use client";
import style from "./page.module.scss";
import { motion } from "framer-motion";
import { Logo } from "./components/Logo/Logo";
import { Loader } from "./components/Loader/Loader";
import { Login } from "./components/Login/Login";
import { useContext } from "react";
import { globalContext } from "./(context)/globalcontext";

export default function HomePage() {
  const { logged } = useContext(globalContext);

  return (
    <main className={style.main}>
      <motion.div
        initial={{ translateY: 125 }}
        animate={{ translateY: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Logo />
      </motion.div>

      <div className={style.sections}>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: logged ? -120 : 23,
            width: "100%",
            height: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: 6, times: [0, 0.5, 0.5, 0.5, 1], delay: 1.5 }}
        >
          <Loader />
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: logged ? "none" : "block",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 0.5 }}
        >
          <Login />
        </motion.div>
      </div>
    </main>
  );
}
