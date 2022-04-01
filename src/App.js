import './App.css';
import Header from './components/header';
import Body from './components/body';
import { Timeline } from './data/timeline';
import Events from './components/events';

function App() {
  return (
    <>
      <Header />
      <Body />

      {
        Timeline && Timeline.map(item => {
          return (
            <Events data={item} />
          )
        })

      }
    </>
  );
}

export default App;
