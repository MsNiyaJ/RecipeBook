import Home from './Home';
import Add from './Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
