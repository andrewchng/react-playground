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
        {/* <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 m-2 md:items-center text-center md:text-left">
          <div>
            <img
              src="https://picsum.photos/id/237/500"
              className="w-full rounded-lg"
              alt=""
            />
          </div>
          <div>
            <h1 className="mb-2 text-4xl font-medium">hello world</h1>
            <p>loren ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;
