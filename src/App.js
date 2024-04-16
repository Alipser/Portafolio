import { NavBar } from "./Components/navBar/navBar";
import { Home } from "./Components/home/home";
import { Skills } from "./Components/skills/skills";
import { Portfolio } from "./Components/portfolio/portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <main>
        <Home></Home>
        <Skills></Skills>
        <Portfolio></Portfolio>
      </main>

    </div>
  );
}

export default App;
