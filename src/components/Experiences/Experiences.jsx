import css from "./Experiences.module.css";
import EducationItem from "../EducationItem/EducationItem";
import WorkExperienceItem from "../WorkExperienceItem/WorkExperienceItem";
import { useState, useRef, useEffect } from "react";

export default function Experiences({ experience }) {
  const workListRef = useRef();
  const [showMore, setShowMore] = useState(false);
  const [listHeight, setListHeight] = useState(365);

  useEffect(() => {
    if (workListRef.current) {
      workListRef.current.style.height = `${listHeight}px`;
    }
  }, [listHeight]);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setListHeight(!showMore ? workListRef.current.scrollHeight : 365);
  };
  return (
    <ul className={css.expList}>
      <li className={css.expListItem}>
        <h3 className={css.expTitle}>Education</h3>
        <ul className={css.detailExpList}>
          {experience.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </ul>
      </li>

      <li className={css.expListItem}>
        <h3 className={css.expTitle}>Work Experience</h3>
        <ul
          className={css.detailExpList}
          style={{ overflow: "hidden" }}
          ref={workListRef}
        >
          {experience.workExperience.map((exp, index) => (
            <WorkExperienceItem key={index} {...exp} />
          ))}
        </ul>

        {showMore ||
          (listHeight <= 365 && (
            <button onClick={handleShowMore}>
              {showMore ? "Меньше" : "Больше"}
            </button>
          ))}
        {showMore && <button onClick={handleShowMore}>Меньше</button>}
      </li>
    </ul>
  );
}
