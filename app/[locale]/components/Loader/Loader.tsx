import styles from "./loader.module.scss";

const animList = ["one", "two", "three"];

export function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        {animList.map((anim, index) => (
          <div key={index} className={`${styles.loader} ${styles[anim]}`}>
            <div className={styles.ballbox}>
              <div className={styles.ball}> </div>
            </div>
            <div className={styles.circle}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
