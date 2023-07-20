import styled from 'styled-components'

type Props = {
    Name: string,
    Description: string,
    imagenUrl: string,
    arr:
    {
        name: string,
        icon: string
    }[]
}

const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
    background: linear-gradient( 100deg, white, var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const DescriptionP = styled.p`
    display: flex;
    justify-content: center;
    font-weight: lighter;
    font-size: 1rem;
    min-width: 200px;

    overflow: hidden;
    padding-left: 15px;
    padding-right: 15px;
`

const ProjectCard = ({ Name, Description, imagenUrl, arr }: Props) => {
    return (
        <div className='Card'>
            <img src={imagenUrl} alt="project image" className="h-full w-full" />
            <div className="hovCard">
                <Title>{Name}</Title>
                <DescriptionP>{Description}</DescriptionP>
                <div className='flex flex-row gap-3 overflow-hidden'>
                    {arr.map((arr, index) => (
                        <div className="tecs mb-2" key={index}>
                            <img src={arr.icon} className="min-h-0 min-w-0 w-[2rem] shrink-0 " />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard