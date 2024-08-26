import style from "./button.module.scss";

interface Name {
  name: string;
}

export function Button({ name }: Name) {
  return (
    <div className={style.buttonContainer}>
      <div className={style.circle}></div>
      <button type="submit">{name}</button>
    </div>
  );
}
