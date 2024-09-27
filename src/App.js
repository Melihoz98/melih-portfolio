import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
<Navbar />
<Home />
<Projects />
<Skills />
<About />
    </div>
  );
}

export default App;
