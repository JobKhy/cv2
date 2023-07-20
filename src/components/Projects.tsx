import { tec } from '@/data'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'


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

`

const GridProj = styled.div`
    overflow-x: scroll;
    display: grid;

    max-width: 100vw;
    max-height: 100vh;
    justify-content: space-evenly;
    padding-top: 2rem;
    scroll-snap-type: x mandatory;

@media (max-width: 980px) {
    grid-gap: 1rem;
    grid-row-gap: 3rem;
    padding-left: 10%;
    padding-right: 10%;

    justify-content: space-between;

    grid-template: repeat(3, 1fr) / repeat(9, 1fr);
    grid-auto-flow: column;

`

const Title = styled.div`
    font-size: 3rem;
    font-weight: 500;
    background: linear-gradient( 100deg, var(--primary), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Projects = () => {
    return (
        <Container id='projects'>
            <Title>Projects</Title>
            <GridProj className='scrollin'>
                {tec.map((tec, index) => (
                    <ProjectCard Name={tec.name} Description={tec.description} arr={tec.tecs} key={index} imagenUrl={tec.imagenUrl} />
                ))}
            </GridProj>
        </Container>
    )
}

export default Projects