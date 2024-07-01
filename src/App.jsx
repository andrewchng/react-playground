import "./App.css";
import ChannelBar from "./components/ChannelBar/ChannelBar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <ChannelBar></ChannelBar>
        <ContentContainer></ContentContainer>
      </div>
    </>
  );
}

export default App;
