import './App.css';
import Header from './components/header';
import Body from './components/body';
import { Timeline } from './data/timeline';
import Events from './components/events';
import Contact from './components/Contact/Contact';
import Footer from './components/footer'


function App() {
  return (
    <div className='container-fluid p-0 m-0 overflow-hidden' style ={{background : "#2B2B3F"}} >


      <Header />
      <Body />
      <div style={{ scrollSnapType: "y mandatory" }} className='container-fluid p-0 m-0'>
        {
          Timeline && Timeline.map(item => {
            return (
              <Events data={item} />
            )
          })

        }
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
