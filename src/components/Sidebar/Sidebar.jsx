import { BsPlus, BsLightningFill, BsGearFill } from "react-icons/bs"
import { FaFire, FaPoo } from "react-icons/fa"
import './Sidebar.css'

export default function Sidebar(){
    return  (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
         
            <SidebarIcon icon={<FaFire size="28"/>} />
            <SidebarIcon icon={<BsPlus size="32"/>} />
            <SidebarIcon icon={<BsLightningFill size="28"/>} />
            <SidebarIcon icon={<FaPoo size="28"/>} />
        </div>
    )
}

function SidebarIcon({icon, text='tooltip 💡'}){
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}