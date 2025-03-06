import "./App.css";
import {
  Hero,
  Programs,
  Reasons,
  Plans,
  Testemonials,
  Join,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testemonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
