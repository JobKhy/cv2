import styled from 'styled-components'
import { contact, stack } from '@/data'

type Props = {}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100dw;
    height: 100vh;
`
const Left = styled.div`
    position: relative;
    display: column;
    max-height: 90vh;
    width: 49.5vw;
    margin-left: 5vw;
    // background-color: #b5b5b5;
`
const Title = styled.div`
    font-size: 3rem;
    font-weight: 500;
    background: linear-gradient( 100deg, var(--primary), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const Info = styled.div`
    margin-left: 30px;
    margin-top: 30px;
    font-weight: lighter;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    `

const Row = styled.div` 
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: end;

    div{
        text-decoration: none;  
        padding: 0 .2rem;
        border-radius: 0.5rem;
        transition: 0.3s ease-in-out;
        z-index: 5;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;  
    }
    div::before {
        content: "";
        height: 30%;
        width: 100%;
        display: block;
        z-index: -5;
        opacity: 30%;
        position: absolute;
        transition: all 0.3s ease;
        background: linear-gradient(180deg, transparent 50%, var(--accent) 50%);
    }

    div:hover::before {
        height: 100%;
        transition: all 0.3s ease;
        background: linear-gradient(180deg, var(--accent) 50%, var(--accent) 50%);
        opacity: 80%;
    }
      
`
const Right = styled.div`
    position: relative;
    display: column;
    width: 49.5vw;
    self-align: center;
    justify-content: center;
`
const Center = styled.div`
    position: relative;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    margin-top: 5rem;
`
const Stack = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    width: 180px;
    gap: 1.2rem;
`


const Contact = (props: Props) => {
  return (
    <Container id='contact'>
        <Left>
            <Title className=" text-[40px] font-normal">Do you have a project in mind?</Title>
        <Info>
            <span className='text-[30px]'>Send me a message!</span>
            <Row>
                <p>You can contact me by email: </p>
                <div><a href="mailto:pina.martinez.gael.job@gmail.com"> pina.martinez.gael.job@gmail.com</a></div>
            </Row>
            <span>or by other of this apps</span>
            
                {contact.map((contact) => (
                    <a target='blank' href={contact.link} key={contact.name}>
                        <div className="flex flex-row gap-4 self-center items-center">
                            <img src={contact.icon} className="min-h-0 min-w-0 w-6 shrink-0"/>
                            <div className="  font-light tracking-[3.2] leading-[32px] mr-20 w-[176px] shrink-0 h-full">{contact.name}</div>
                        </div>
                    </a>
                    
                ))}

        </Info>
        </Left>
    <Right>
        <Title className='text-center'>
            Main stack
        </Title>
        <Center>
        <div className='flex flex-col gap-8'>
        {stack.map((skill, index) => (
            <Stack key={index}>
                <img src={skill.icon} className="min-h-0 min-w-0 w-[2rem] shrink-0" />
                <p className="  font-light tracking-[3.2] leading-[32px] shrink-0 h-full">
                    {skill.name}
                </p>
            </Stack>
        ))}
        </div>
        </Center>
    </Right>
    </Container>
  )
}

export default Contact