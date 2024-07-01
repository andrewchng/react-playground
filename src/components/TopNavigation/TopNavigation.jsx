import { FaBell, FaHashtag, FaSun, FaUser } from "react-icons/fa"
import "./TopNavigation.css"

export default function TopNavigation(){
    return (
        <div className="top-navigation">
            <HashTagIcon/>
            <Title/>
            <DarkModeToggle/>
            <SearchBar/>
            <NotificationIcon/>
            <ProfileIcon/>
        </div>
    )
}

function HashTagIcon(){
    return (
        <FaHashtag className="title-hashtag" size={20}></FaHashtag>
    )
}

function Title(){
    return (
        <h5 class="title-text">Title</h5>
    )
}

function DarkModeToggle(){
    return (
        <FaSun className="top-navigation-icon" size={32}></FaSun>
    )
}

function SearchBar(){
    return (
        <input type="text" placeholder="Search"></input>
    )
}

function NotificationIcon(){
    return (
        <FaBell className="top-navigation-icon" size={24}/>
    )
}

function ProfileIcon(){
    return (
        <FaUser className="top-navigation-icon" size={24}/>
    )
}
    