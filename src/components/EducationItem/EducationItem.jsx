import css from "../WorkExperienceItem/WorkExperienceItem.module.css";

export default function EducationItem({ institution, degree, dates, logo }) {
  return (
    <li className={css.expListItem}>
      <div className={css.expLogo}>
        <img className={css.logo} src={logo} alt="field of activity logo" />
      </div>
      <div className={css.expDescr}>
        <h3>{institution}</h3>
        <p>{degree}</p>
        <p>{dates}</p>
      </div>
    </li>
  );
}
