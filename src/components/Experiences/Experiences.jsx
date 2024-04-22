import css from "./Experiences.module.css";

export default function Experiences() {
  return (
    <>
      <h3 className={css.title}>Experience</h3>
      <div className={css.experience}>
        <div className={css.educationWrapper}>
          <ul className={css.schoolList}>
            <li className={css.schoolListItem}>
              <h3 className={css.listItemTitle}>IT School GOIT</h3>
              <p className={css.degree}>Fullstack developer</p>
              <p className={css.dates}>Jul 2023 - Jun 2024</p>
            </li>
            <li className={css.schoolListItem}>
              <h3 className={css.listItemTitle}>WSB Merito University</h3>
              <p className={css.degree}>Master's Degree / Management</p>
              <p className={css.dates}>Oct 2017 - Jul 2019</p>
            </li>
            <li className={css.schoolListItem}>
              <h3 className={css.listItemTitle}>
                Oles Honchar Dnipro National University
              </h3>
              <p className={css.degree}>Bachelor's Degree / History</p>
              <p className={css.dates}>Sep 2013 - Jun 2017</p>
            </li>
          </ul>
        </div>

        <div className={css.workWrapper}>
          <ul className={css.firmsList}>
            <li className={css.firmsListItem}>
              <h3 className={css.listItemTitle}>Area Manager</h3>
              <p>Amazon</p>
              <p className={css.dates}>May 2021 - Present</p>
            </li>
            <li className={css.firmsListItem}>
              <h3 className={css.listItemTitle}>Inditex</h3>
              <ul className={css.inditexList}>
                <li className={css.inditexListItem}>
                  <p>Store Manager</p>
                  <p className={css.dates}>Nov 2020 - Jan 2021</p>
                </li>
                <li className={css.inditexListItem}>
                  <p>Deputy Store Manager</p>
                  <p className={css.dates}>Dec 2019 - Nov 2020 </p>
                </li>
                <li className={css.inditexListItem}>
                  <p>Assistant Store Director</p>
                  <p className={css.dates}>Apr 2018 - Nov 2019</p>
                </li>
              </ul>
            </li>
            <li className={css.firmsListItem}>
              <h3 className={css.listItemTitle}>
                Polish language teacher for non-native speakers
              </h3>
              <p>Savoy Polish Center</p>
              <p className={css.dates}>Jan 2017 - Jul 2017</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
