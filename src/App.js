import ChildComponent from "./ChildComponent";
import Navbar from "./Navbar";
import ParentContainer from "./ParentContainer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div>
      <Navbar>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </Navbar>
      <Sidebar>
        <a href="#people">People</a>
        <a href="#planets">Planets</a>
        <a href="#starships">Starships</a>
      </Sidebar>
      <ParentContainer>
        <div>
          <h3>Star Wars Characters</h3>
          <ChildComponent />
        </div>
      </ParentContainer>
    </div>
  );
}

export default App;
