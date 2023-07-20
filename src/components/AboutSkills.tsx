import styled from 'styled-components'
import { skills } from '@/data'

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100dw;
    height: 100vh;

    @media (max-width: 980px) {
        flex-direction: column;
        height: 100%;
    }
`
const Left = styled.div`
    position: relative;
    display: column;
    align-items: baseline;
    // max-height: 90vh;
    width: 49.5vw;
    self-align: center;

    @media (max-width: 980px) {
        width: 100%;
        margin-top: 5rem;
    }
`
const Title = styled.h2`
    font-size: 3rem;
    font-weight: 500;
    background: linear-gradient( 100deg, var(--primary), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;

    @media (max-width: 980px) {
        font-size: 2rem;
    }

`
const Info = styled.div`
    font-size: 1.2rem;
    font-weight: 200;
    padding: 1rem;
    max-width: 70%;
    text-align: justify;
    margin: auto;

    @media (max-width: 980px) {
        max-width: 90%;
    }
`
const Separator = styled.img`
    position: relative;
    display: flex;
    width: 1vw;

    @media (max-width: 980px) {
        display: none;
    }
`
const Right = styled.div`
    position: relative;
    display: column;
    width: 49.5vw;
    self-align: center;
    justify-content: center;
    @media (max-width: 980px) {
        width: 100%;
    }
`
const Grid = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    
    // background: linear-gradient( 100deg, var(--primary), var(--accent-light));

    gap: 2rem;
    padding: 5rem;

    @media (max-width: 980px) {
        margin-top: 2rem;
        width: 100%;
        padding: 0;

    }

`
const Skill = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 180px;
    gap: 1rem;

    @media (max-width: 980px) {
        width: 40%;
        justify-content: center;
    }

`



const AboutSkills = () => {

  return (
    <Container id='about'>
        <Left>
            <Title>About me</Title>
            <Info>
                I am Job a mexican web developer, I am seeking an internship opportunity
                with a reputable company. I have experience in HTML, CSS, and JavaScript,
                and I am currently learning other technologies such as React, React
                Native, and Node.js. I am eager to acquire new skills, knowledge, and
                experience, and I am motivated to grow professionally.
                <br />I am also studying UX/UI and layout design to improve user experience
                and interface design in my web and mobile development projects. Through my
                UX/UI training, I have acquired skills to research and test with users, and
                to create wireframes and prototypes using tools like Figma and Adobe XD.
            </Info>
        </Left>
        <Separator src="https://file.rendit.io/n/ZBwGlUn5851M0C15LLkb.svg" className="min-h-20 min-w-20 self-center mt-16 w-[2px] shrink-0 h-[70vh] max-h-[660px]" />
        <Right >
            <Title>
                Knowledges
            </Title>
            <Grid>
                {skills.map((skill, index) => (
                    <Skill key={index}>
                        <img src={skill.icon} className="min-h-0 min-w-0 w-6 shrink-0" />
                        <p className="  font-light tracking-[3.2] leading-[32px] shrink-0 h-full">
                            {skill.name}
                        </p>
                    </Skill>
                ))}
            </Grid>
        </Right>
    </Container>
  )
}

export default AboutSkills