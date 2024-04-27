import { useState } from "react";
import {
  PiArrowBendRightDownThin,
  PiArrowBendRightUpThin,
} from "react-icons/pi";
import css from "./WorkExperienceItem.module.css";

export default function WorkExperienceItem({
  position,
  company,
  dates,
  details,
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
      <h3 className={css.title}>{position}</h3>
      <p className={css.company}>{company}</p>
      <p className={css.dates}>{dates}</p>
      {!loadMore && details?.length > 0 && (
        <p className={css.expLabel} onClick={showDetails}>
          Position Description <PiArrowBendRightDownThin />
        </p>
      )}
      {loadMore && details?.length > 0 && (
        <>
          <p className={css.expLabel} onClick={hideDetails}>
            Hide details
            <PiArrowBendRightUpThin />
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
    </li>
  );
}
