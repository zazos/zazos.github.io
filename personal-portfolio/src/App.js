
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Visualization } from './components/Visualization';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Visualization />
      <Contact />
    </div>
  );
}

export default App;
