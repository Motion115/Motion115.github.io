

import ProjectList from "../modules/projectList";
import ProjectCard from "../modules/group_items/projectCard";
import PaperConstellationImg from "@/assets/teaser/paperconstellation.png";
import PaperConstellationInteractive from "@/assets/teaser/paperconstellation.gif";

const projectList = [
  <ProjectCard
    projectTitle="Paper Constellations"
    codeLink="https://github.com/Motion115/paper-constellations"
    exploreLink="https://motion115.github.io/paper-constellations/"
    abstractContent={
      <>
        Paper Constellation is an AI-curated information space to support
        researchers in exploring ("stargazing") large conference proceedings at
        scale. The project currently holds all metadata for CHI'25.
      </>
    }
    teaser={PaperConstellationImg}
    teaserInteractive={PaperConstellationInteractive}
  />,
];

const NewProjectDisplayList = () => {
  return (
    <>
      <ProjectList itemList={projectList} />
    </>
  );
};

export default NewProjectDisplayList;
