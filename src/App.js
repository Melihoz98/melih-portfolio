import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
<Navbar />
<Home />
<Projects />
<About />
<Contact />
    </div>
  );
}

export default App;
