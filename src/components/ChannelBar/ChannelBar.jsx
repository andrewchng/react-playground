import { FaCaretRight, FaPlus } from "react-icons/fa";
import './ChannelBar.css';


export default function ChannelBar() {
  return (
    <div className="text-white channel-bar shadow-lg">
      <ChannelBlock></ChannelBlock>
      <div className="channel-container">
        <Dropdown headerName="Topics" ></Dropdown>
        <Dropdown headerName="Questions" ></Dropdown>
        <Dropdown headerName="Random" ></Dropdown>
      </div>
    </div>
  );
}

function Dropdown({headerName, }) {
  return (
    <div className="dropdown">
      <div className="dropdown-header">
      <FaCaretRight size="22"/>       
       <span>
            {headerName}
        </span>
        <FaPlus className="ml-auto" size="10" />    
      </div>
      <div className="dropdown-selection"></div>
    </div>
  );
}

function ChannelBlock() {
  return (
    <div className="channel-block">
      <div className="channel-block-text">
        <h5>Channel</h5>
      </div>
    </div>
  );
}
