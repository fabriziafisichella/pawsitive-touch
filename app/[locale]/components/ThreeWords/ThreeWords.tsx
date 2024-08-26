import style from "./threewords.module.scss";

interface Words {
  first: string;
  second: string;
  third: string;
}

export function ThreeWords({ first, second, third }: Words) {
  return (
    <div className={style.container}>
      <div className={style.firstBlock}>
        <span className={style.first}>{first}</span>
        <span className={style.second}>{second}</span>
      </div>

      <span className={style.third}>{third}</span>
    </div>
  );
}
