import Trending from "./Components/Trending";
import FixedHeader from "./Components/FixedHeader";
import Popular from "./Components/Popular";
import "./styleSheet2.css";
import "./styleSheet3.css";
import "./styleSheet4.css";
import "./styles.css";

import CreatePost from "./Components/CreatePost";
import CommunityCreated from "./Components/CommunityCreated";
import LoggedInHeader from "./Components/LoggedInHeader";
import ProfilePage from "./Components/ProfilePage";

function App() {
  // Is logged in state y/n needs to be here. BUT we wont be doing logged in for some time
  return (
    <>
      <FixedHeader />
      <LoggedInHeader />
      <CommunityCreated />
      <Trending />
      <Popular />
      <CreatePost />
      <ProfilePage />
    </>
  );
}

export default App;
