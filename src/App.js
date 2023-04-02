import styles from "./App.module.css";
import Shapes from "./components/Shapes";
import Services from "./components/Services";
import SelectedWorks from "./components/SelectedWorks";

function App() {
  return (
    <main>
      <Shapes />
      <Services />
      <SelectedWorks />
    </main>
  );
}

export default App;
