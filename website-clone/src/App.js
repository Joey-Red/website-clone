import Homepage from "./Components/Homepage";
import FixedHeader from "./Components/FixedHeader";
import './styles.css';
function App() {
  // Is logged in state y/n needs to be here. BUT we wont be doing logged in for some time
  return (
    <>
      <FixedHeader />
      <Homepage />
    </>
  );
}

export default App;
