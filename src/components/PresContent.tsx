import styled from 'styled-components'
import hero from '../assets/img/mooni1.png'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


type Props = {}

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
    width: 45vw;  
    padding-left: 10vw;
    self-align: center;

    .Deg {
        font-weight: 500;
        background: linear-gradient(120deg, var(--primary), var(--accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
`
const Right = styled.div`
    position: relative;
    display: flex;
    flex: 2;
    align-items: center;
    width: 45vw;
    height: 100%;
    padding-top: 8vh;
    justify-content: center;
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
`
const More = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    width: 10vw;
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

    a:hover {
        opacity: 100%;
        font-weight: 400;
    }

    a:hover::before {
        height: 100%;
        opacity: 80%;
        background: linear-gradient(180deg, var(--accent) 50%, var(--accent) 50%);
        transition: all 0.3s ease;
      }

`
const Finger = styled.div`
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

const PresContent = (props: Props) => {
  return (
    <Container id='home'>
        <Left>
            <span className="text-[40px] font-normal">Hi! 👋<br/>My name is </span>
            <span className="Deg text-[40px] font-normal">Job</span>
            <div className="w-[492px] left-[35px] top-[162px] text-opacity-70 text-lg font-light">
                    Junior FrontEnd developer and Scrum Master who wants to improve his knowledges and gain work experience
                </div>
        </Left>
        <More>
            <a href='#projects'
            >Take a look at my projects</a>
            <Finger 
            className="w-[58px] text-center text-3xl font-light floatAn"
            >👇</Finger>
        </More>
        <Right>
            <Canvas>
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