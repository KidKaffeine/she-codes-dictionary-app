import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div className="App">
      <Dictionary defaultWord="bubble" />
      <ParticleBackground />
    </div>
  );
}

export default App;
