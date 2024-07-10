import { FaCaretRight, FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import './ChannelBar.css';
import { useState } from "react";
import { BsHash } from "react-icons/bs";


const topic = ["tailwind-css", "react"];
const questions = [
  "jit-compilation", "purge-files", "dark-mode"
]
const random = [
  "variants", "plugins"
]
 

export default function ChannelBar() {
  return (
    <div className="text-white channel-bar shadow-lg">
      <ChannelBlock></ChannelBlock>
      <div className="channel-container">
        <Dropdown headerName="Topics" selections={topic}></Dropdown>
        <Dropdown headerName="Questions" selections={questions}></Dropdown>
        <Dropdown headerName="Random" selections={random} ></Dropdown>
      </div>
    </div>
  );
}

function Dropdown({headerName, selections}) {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="dropdown">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
      <ChevronIcon expanded={expanded}/>       
       <h5 className={expanded? 'dropdown-header-text-selected' : "dropdown-header-text"}>
            {headerName}
        </h5>
        <FaPlus className="ml-auto" size="10" />    
      </div>
      {expanded &&
            selections.map((option)=>{
              return <TopicSelection selection={option}/>
            })
      }
    </div>
  );
}

const TopicSelection = ({selection}) => {
  return (<div className="dropdown-selection">
    <BsHash size={24}/>
    <h5>{selection}</h5>
  </div>)
}

const ChevronIcon = ({expanded})=>{
  const chevClass = "mr-1"
  return expanded?(
    <FaChevronDown className={chevClass}/>
  ) : (
    <FaChevronRight className={chevClass}/>
  )
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
