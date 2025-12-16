import Navbar from "./components/Navbar";
import Main from "./components/Main"; import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (Math.random() < 0.5) {
      document.querySelector(".nav-logo").classList.add("spinleft");
    } else {
      document.querySelector(".nav-logo").classList.add("spinright");
    }

  }, []);

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;