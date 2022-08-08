import './App.css';
import { Routes, Route } from 'react-router-dom';
import AccordionText from '../src/components/Accordion/AccordionText';
import SearchText from '../src/components/Search/SearchText'

function App() {
  return (
    <div className="container">
  <div className='search'><SearchText/> </div>
  <div className='accordion'> <AccordionText/> </div>
    </div>
  );
}

export default App;
