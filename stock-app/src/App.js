import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StockPage from './StockPage'
import CorrHeat from './CorrHeat';

function App() {
  return (
    <Router>
     <div className="main_div">
        <nav id="nav_bar">
          <div id="Link_list">
            <Link to="/stock-app" className="link">StockPage</Link>
            <Link to="/stockpage" className="link">StockPage</Link>
            <Link to="/corrheat" className="link">CorrHeat</Link>
            
          </div>
        </nav>

        <br /><br />

        <div className="Link_of_Pages">
          <Routes>
            <Route path="/stock-app" element={<StockPage />} />
            <Route path="/stockpage" element={<StockPage />} />
            <Route path="/corrheat" element={<CorrHeat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
