import { Header } from '../components/shared/Header/Header';
import { Insta } from 'components/shared/Insta/Insta';
import { Footer } from 'components/shared/Footer/Footer';
import { useState } from 'react/cjs/react.development';
import useWindowDimensions from 'components/utils/useWindowDimensions';

export const Layout = ({ children }) => {
  const[navButton, setNavButton] = useState(false);
  const { width } = useWindowDimensions();

  const handleClick = () => {
    if(navButton === false){
      setNavButton(true);
    }else{
      setNavButton(false);
    }
  }

  const clickedOut = () => {
    setNavButton(false);
  }

  const handleDefaultNav = () => {
    if(width > 767){
      setNavButton(true);
    }
  }

  return (
    <>
      <header className='header'>
        <Header handleClick={handleClick} navButton={navButton}/>
      </header>
      <main className='content' onClick={clickedOut} onMouseOver={handleDefaultNav}>
        {children}
        <Insta />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  );
};
