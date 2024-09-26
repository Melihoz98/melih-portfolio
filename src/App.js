import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
function App() {
  return (
    <div className="App">
<Navbar />
<Home />
<Projects />
    </div>
  );
}

export default App;
