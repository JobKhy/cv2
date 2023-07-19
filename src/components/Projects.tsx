import { tec } from '@/data'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'


type Props = {}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100dw;
    height: 100vh;
    padding-top: 8vh;
`
const Title = styled.div`
    font-size: 3rem;
    font-weight: 500;
    background: linear-gradient( 100deg, var(--primary), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Projects = (props: Props) => {

    return (
        <Container id='projects'>
            <Title>Projects</Title>
            <div className='flex flex-wrap h-full w-full pt-12 justify-evenly '>
                {tec.map((tec, index) => (
                    <ProjectCard Name={tec.name} Description={tec.description} arr={tec.tecs} key={index} imagenUrl={tec.imagenUrl}/>
                ))}
            </div>
        </Container>
    )
}

export default Projects