import css from "./Experiences.module.css";
import EducationItem from "../EducationItem/EducationItem";
import WorkExperienceItem from "../WorkExperienceItem/WorkExperienceItem";

export default function Experiences({ experience }) {
  return (
    <div className={css.expWrapper}>
      <div className={css.partWrapper}>
        <h3>Education</h3>
        <ul className={css.expList}>
          {experience.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </ul>
      </div>

      <div className={css.partWrapper}>
        <h3>Work Experience</h3>
        <ul className={css.expList}>
          {experience.workExperience.map((exp, index) => (
            <WorkExperienceItem key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
}
