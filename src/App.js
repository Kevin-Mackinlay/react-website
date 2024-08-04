import Navbar from './components/navbar/Navbar';
import Home from './home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Add all icons to the library so you can use them globally
library.add(fas);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        
      </Router>
    </>
  );
}

export default App;
