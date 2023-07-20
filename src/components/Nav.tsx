import { section } from '@/data'
import { styled } from 'styled-components'


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 8vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: var(--bg);
`

const Left = styled.div`
    position: absolute;
    display: flex;
    align-items: baseline;
    left: 5rem;
    gap: 4px;
    h2 {
        font-size: 1.4rem;
        font-weight: 500;
        background: linear-gradient(120deg, var(--primary), var(--accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    :hover {
        cursor: default;
    }

    @media (max-width: 980px) {
        left: 2rem;

        h2 {
            font-size: 1rem;
        }
    }
`

const Right = styled.div`
    position: relative;   

    gap: 2rem;
    display: inline-flex;
    justify-content: normal;
    padding-right: 1rem;

    @media (max-width: 980px) {
        gap: 4rem;
        margin-right: 0;
    }

`
const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20vw;      
    div {
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
        height: 50%;
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


const Nav = () => {

    const darkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'dark')
    }
    const lightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'light')
    }

    const togleTheme = () => {
        if (document.querySelector('body')?.getAttribute('data-theme') === 'light') {
            darkMode()
            console.log("darjMode");
            
        } else {
            lightMode()
            console.log("lightMode");
        }
    }

  return (
    <Container>
        <Left className='relative self-center'>
            <h2> Job Martinez </h2> 
        </Left>
        
        <Right>
            <Sections>
                {section.map((item, index) => (
                    <div key={index}>
                        <a href={item.link} className={item?.display}>
                        {item.name}
                        </a>
                    </div>
                ))}
            </Sections>
            <button onClick={() => togleTheme() }>
                <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            </button>
            
        </Right>
    </Container>
  )
}

export default Nav