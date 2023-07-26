import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './componenets/home';
import NavBar from './componenets/navbar';
import CalculatorStructure from './componenets/calculator';
import DisplayQuotes from './componenets/quotes';
import NotFound from './componenets/notFound';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculate" element={<CalculatorStructure />} />
        <Route path="/quotes" element={<DisplayQuotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
