import styles from "./style.module.css";

const getButtonStyle = (round, color, outlined, filled) => {
  const classNames = [styles.button];

  if (round) {
    classNames.push(styles.button__round);
  }
  if (color) {
    classNames.push(styles[`button--${color}`]);
  }
  if (outlined) {
    classNames.push(styles.button__outlined);
  }
  if (filled) {
    classNames.push(styles.button__filled);
  }
  return classNames.join(" ");
};

const Button = ({ children, round, color, outlined, ...rest }) => {
  return (
    <button className={getButtonStyle(round, color, outlined)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
