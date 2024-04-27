import css from "./Experiences.module.css";
import clsx from "clsx";
import EducationItem from "../EducationItem/EducationItem";
import WorkExperienceItem from "../WorkExperienceItem/WorkExperienceItem";
import TechStack from "../TechStack/TechStack";

export default function Experiences({ experience, tech }) {
  return (
    <ul className={css.expList}>
      <li className={css.expListItem}>
        <h3 className={css.expTitle}>Education</h3>
        <ul className={clsx(css.detailExpList, css.eduList)}>
          {experience.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </ul>
      </li>

      <li className={css.expListItem}>
        <h3 className={css.expTitle}>Work Experience</h3>
        <ul className={clsx(css.detailExpList, css.workList)}>
          {experience.workExperience.map((exp, index) => (
            <WorkExperienceItem key={index} {...exp} />
          ))}
        </ul>
      </li>

      <li className={clsx(css.expListItem, css.techItem)}>
        <h3 className={css.expTitle}>Tech Stack</h3>
        <ul className={clsx(css.detailExpList, css.techList)}>
          {tech.map((tech, index) => (
            <TechStack key={index} {...tech} />
          ))}
        </ul>
      </li>
    </ul>
  );
}
