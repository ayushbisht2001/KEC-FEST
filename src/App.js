import './App.css';
import Header from './components/header';
import Body from './components/body';
import { Timeline } from './data/timeline';
import Events from './components/events';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='container-fluid p-0 m-0 overflow-hidden'>


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
    </div>
  );
}

export default App;
