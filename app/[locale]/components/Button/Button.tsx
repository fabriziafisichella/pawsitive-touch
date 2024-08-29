import style from "./button.module.scss";

interface ButtonPrompts {
  name: string;
  action: () => void;
}

export function Button({ name, action }: ButtonPrompts) {
  return (
    <div className={style.buttonContainer} onClick={action}>
      <div className={style.circle}></div>
      <button type="submit" onClick={(e) => e.preventDefault()}>{name}</button>
    </div>
  );
}
