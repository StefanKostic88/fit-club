import { useState } from "react";
import "./App.css";
import {
  Hero,
  Programs,
  Reasons,
  Plans,
  Testemonials,
  Join,
  Footer,
  ModalWithOverlay,
} from "./components";

function App() {
  const [email, setEmail] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleModalToggle = () => {
    setIsOpened((prev) => !prev);
  };

  const onEmailSelect = (email: string) => {
    setEmail(() => email);
    handleModalToggle();
  };

  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testemonials />
      <Join onEmailSelect={onEmailSelect} />
      <Footer />
      <ModalWithOverlay
        {...{
          email,
          onModalToggle: handleModalToggle,
          isModalOpened: isOpened,
        }}
      />
    </div>
  );
}

export default App;
