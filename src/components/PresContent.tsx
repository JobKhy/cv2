import styled from 'styled-components'
import hero from '../assets/img/mooni1.png'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100dw;
    height: 100vh;
    // padding-top: 8vh;

`
const Left = styled.div`
    position: relative;
    display: column;
    align-items: baseline;
    width: 45%;  
    padding-left: 8vw;
    self-align: center;

    .Deg {
        font-weight: 500;
        background: linear-gradient(120deg, var(--primary), var(--accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 780px) {
        position: relative;
        justify-self: center;
        padding-left: 0;
        margin: 0 auto;
    }
    
`
const Right = styled.div`
    position: relative;
    display: flex;
    flex: 2;
    align-items: center;
    width: 45%;
    height: 100%;
    padding-top: 8vh;
    justify-content: center;

    @media (max-width: 980px) {
        position: absolute;
        left: 0;
        visibility: hidden;
        z-index: -1;
        width: 100%;
    }

    img {
        position: absolute;
        object-fit: contain;
        display: flex;
        width: 50%;
        height: auto;
        animation: move 4s ease-in-out infinite;
    }
    @keyframes move {
        0% {
            transform: translatey(-4px);
        }
        50% {
            transform: translatey(4px);
        }
        100% {
            transform: translatey(-4px);
        }
    }

    @media (max-width: 980px) {
        .sphere{
            display: flex;
            visibility: visible;
        }
    }
`
const More = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    width: 10%;
    text-transform: uppercase;
    transition: 0.3s;
    gap: 10px;
    cursor: default;
    margin-bottom: 10px;
    a {
      z-index: 5;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      cursor: pointer;
      text-align: center;
      font-size: .8rem;
      font-weight: lighter;
      opacity: 60%;
    }

    a::before {
        content: "";
        height: 5%;
        width: 100%;
        display: block;
        opacity: 20%;
        position: absolute;
        transition: all 0.3s ease;
        background: linear-gradient(180deg, var(--accent) 50%, var(--accent) 50%);

    }

    a{
        transition: all 0.3s ease;
    }

    a:hover {
        opacity: 100%;
        font-weight: 400;
        transition: all 0.1s ease;
        padding: 0 2px;
    }

    a:hover::before {
        height: 100%;
        opacity: 80%;
        background: linear-gradient(180deg, var(--accent) 50%, var(--accent) 50%);
        transition: all 0.3s ease;
      }

    @media (max-width: 980px) {
        position: absolute;
        width: 18vw;
        left: 45%;
    }
`
const Finger = styled.p`

    padding-top: 10px;
    opacity: 70%;

    animation: movi 5s ease-in-out infinite;
    
    @keyframes movi {
        0% {
            transform: translatey(-2px);
        }
        50% {
            transform: translatey(2px);
        }
        100% {
            transform: translatey(-2px);
        }
`

const PresContent = () => {
  return (
    <Container id='home'>
        <Left>
        <span className="text-[40px] font-normal">Hi! 👋<br/>My name is </span>
            <span className="Deg text-[40px] font-normal">Job</span>
            <div className="w-[492px] m-0 text-lg font-light max-w-[100%]">
                    Junior FrontEnd developer and Scrum Master who wants to improve his knowledges and gain work experience
                </div>
        </Left>
        <More>
            <a href='#projects'
            >Take a look at my projects</a>
            <Finger 
            className=" text-center text-3xl"
            >👇</Finger>
        </More>
        <Right>
            <Canvas className='sphere'>
                <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={.45} />
                <directionalLight position={[3, 2, 7]} />
                <Sphere args={[1, 100, 200]} scale={1.8} >
                    <MeshDistortMaterial
                    color="#a7c1b5"
                    attach="material"
                    distort={.6}
                    speed={1}
                    />
                </Sphere>
                </Suspense>
            </Canvas>
            <img src={hero} alt="hero"/>
        </Right>
        </Container>
    )
}   

export default PresContent