import css from "../WorkExperienceItem/WorkExperienceItem.module.css";

export default function EducationItem({ institution, degree, dates }) {
  return (
    <li className={css.eduListItem}>
      <h3 className={css.title}>{institution}</h3>
      <p>{degree}</p>
      <p>{dates}</p>
    </li>
  );
}
