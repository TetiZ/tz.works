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
      <div className={css.expLogo}>
        <img className={css.logo} src={logo} alt="Field of activity logo" />
      </div>
      <div className={css.expDescr}>
        <h3>{position}</h3>
        <p>{company}</p>
        <p>{dates}</p>
        {details?.length > 0 && (
          <>
            {loadMore ? (
              <p className={css.expLabel} onClick={hideDetails}>
                <MdOutlineArrowDropDown /> Hide details
              </p>
            ) : (
              <p className={css.expLabel} onClick={showDetails}>
                <MdArrowRight /> Position Description
              </p>
            )}
          </>
        )}
        {loadMore && details?.length > 0 && (
          <ul className="exp-details">
            {details.map((detail, index) => (
              <li key={`${position}-${index}`}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
