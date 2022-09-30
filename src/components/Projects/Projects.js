import React from 'react'
import * as S from "./Projects.styles";
import {projectsPortfolio} from "./ProjectsData";

export const Projects = () => {
  return (
  <S.ContainerProjects id="projects">
    <S.Title>
      Some of {" "}
      <span>
        {" "}
        <br />
        My Services
      </span>
    </S.Title>
    <S.ContentProject>
      {projectsPortfolio.map((project, index) =>(
        <S.ProjectContent>
           <S.TitleProject>{project.title}</S.TitleProject>
           <S.ContainerImage>
            <img src={project.image} alt={project.title} loazy="true"/>
           </S.ContainerImage>
           <S.Description>{project.description}</S.Description>git
        </S.ProjectContent>
      ))}
    </S.ContentProject>
  </S.ContainerProjects>
 );
};

export default Projects;
