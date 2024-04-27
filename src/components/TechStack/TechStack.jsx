import css from "./TechStack.module.css";

export default function TechStack({ name, img, altText }) {
  return (
    <li className={css.techListItem} data-tooltip={name}>
      <img className={css.img} src={img} alt={altText} />
    </li>
  );
}
