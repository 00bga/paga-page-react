import styles from "./App.module.css";
import Header from "./components/Header";
import Services from "./components/Services";
import SelectedWorks from "./components/SelectedWorks";
import About from "./components/About";

function App() {
  return (
    <main>
      <Header />
      <Services />
      <SelectedWorks />
      <About />
    </main>
  );
}

export default App;
