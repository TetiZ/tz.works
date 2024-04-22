import Portfolio from "../../components/Portfolio/Portfolio";
import projData from "../../projects.json";

export default function HomePage() {
  return (
    <>
      <Portfolio projects={projData} />
    </>
  );
}
