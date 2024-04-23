import { useState } from "react";
import { MdArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import css from "./WorkExperienceItem.module.css";

export default function WorkExperienceItem({
  position,
  company,
  dates,
  details,
  logo,
}) {
  const [loadMore, setLoadMore] = useState(false);

  const showDetails = () => {
    setLoadMore(true);
  };

  const hideDetails = () => {
    setLoadMore(false);
  };

  return (
    <li className={css.expListItem}>
      <img className={css.logo} src={logo} alt="Field of activity logo" />

      <div className={css.expDescr}>
        <h3 className={css.title}>{position}</h3>
        <p className={css.company}>{company}</p>
        <p>{dates}</p>
        {!loadMore && details?.length > 0 && (
          <p className={css.expLabel} onClick={showDetails}>
            <MdArrowRight /> Position Description
          </p>
        )}
        {loadMore && details?.length > 0 && (
          <>
            <p className={css.expLabel} onClick={hideDetails}>
              <MdOutlineArrowDropDown /> Hide details
            </p>
            <ul className={css.expDetails}>
              {details.map((detail, index) => (
                <li className={css.expDetails} key={`${position}-${index}`}>
                  {detail}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </li>
  );
}
