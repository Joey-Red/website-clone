import Trending from "./Components/Trending";
import FixedHeader from "./Components/FixedHeader";
import Popular from "./Components/Popular";
import './styles.css';
import CreatePost from "./CreatePost";
function App() {
  // Is logged in state y/n needs to be here. BUT we wont be doing logged in for some time
  return (
    <>
      <FixedHeader />
      {/* <Trending />
      <Popular /> */}
      <CreatePost />
    </>
  );
}

export default App;
