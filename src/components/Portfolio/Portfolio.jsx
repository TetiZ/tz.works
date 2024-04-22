import { PiArrowBendDownRightThin } from "react-icons/pi";
import css from "./Portfolio.module.css";

export default function Portfolio({ projects }) {
  return (
    <>
      <ul>
        {projects.map(
          (
            { name, img, stack, description, role, livePage, codeRepo },
            index
          ) => (
            <li key={index} className={css.listItem}>
              {index % 2 === 0 ? (
                <>
                  <img
                    className={css.img}
                    src={img}
                    width="400"
                    alt={`${name} website preview`}
                  />
                  <div className={css.textWrapper}>
                    <h2 className={css.projName}>{name}</h2>
                    <h3 className={css.projStack}>{stack}</h3>
                    <p className={css.projDescr}>{description}</p>
                    <p className={css.projDescr}>{role}</p>
                    <div className={css.linksWrapper}>
                      <a
                        className={css.projLink}
                        href={livePage}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Live page <PiArrowBendDownRightThin />
                      </a>
                      <a
                        className={css.projLink}
                        href={codeRepo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Code <PiArrowBendDownRightThin />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={css.textWrapper}>
                    <h2 className={css.projName}>{name}</h2>
                    <h3 className={css.projStack}>{stack}</h3>
                    <p className={css.projDescr}>{description}</p>
                    <p className={css.projDescr}>{role}</p>
                    <div className={css.linksWrapper}>
                      <a
                        className={css.projLink}
                        href={livePage}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Live page <PiArrowBendDownRightThin />
                      </a>
                      <a
                        className={css.projLink}
                        href={codeRepo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Code <PiArrowBendDownRightThin />
                      </a>
                    </div>
                  </div>
                  <img
                    className={css.img}
                    src={img}
                    width="400"
                    alt={`${name} website preview`}
                  />
                </>
              )}
            </li>
          )
        )}
      </ul>
    </>
  );
}
