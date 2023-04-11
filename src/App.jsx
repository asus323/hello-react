import react,{useState} from 'react';
import Navbar from './components/navbar/navbar';
import Mobilemenu from './components/mobilenavbar/mobileNavbar';
import { BrowserRouter as Router} from 'react-router-dom';
import AboutMe from './components/aboutMe/aboutMe';
import CardWrapper from './components/cards/cards';
import Footer from './components/footer/footer';
function App() {
  const [isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  return (
<Router>
  <Navbar toggle={toggle} />
  <Mobilemenu isOpen={isOpen} toggle={toggle} />
  <AboutMe />
  <CardWrapper />
  <Footer />
</Router>
);
}

export default App
