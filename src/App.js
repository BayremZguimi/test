import './App.css';
import Smallcard from './components/card/smallcard';
import First from './components/section1/first';
import Header from './components/header/header';
import smallcard from './components/card/smallcard.png';
import Second from './components/section2/second';
import Contact from './components/section3/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Header/>
      <First/>
      <Smallcard display='none' fs='13px' wtt='84px' htt='89px' ml='720px' mt='-370px' wt='202.5px' ht='254px' position='absolute' src={smallcard} color='#1C1B4B' title='Lorem ipsum' desc='dolor sit amet, consectetur
Phasellus nec quam ut'/>
      <Second/>
      <Contact/>
      <Footer/>

</div>
    );
}

export default App;
