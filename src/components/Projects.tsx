import { tec } from "@/data";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dw;
  height: 100vh;
  padding-top: 8vh;

  overflow-x: hidden;
  max-height: 100vh;
`;

const GridProj = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
  background: linear-gradient(100deg, var(--primary), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <GridProj className="scrollin">
        {tec.map((tec, index) => (
          <ProjectCard
            Name={tec.name}
            Description={tec.description}
            arr={tec.tecs}
            key={index}
            imagenUrl={tec.imagenUrl}
          />
        ))}
      </GridProj>
    </Container>
  );
};

export default Projects;
