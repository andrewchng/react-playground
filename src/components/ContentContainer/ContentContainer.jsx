import { FaHashtag } from "react-icons/fa"
import TopNavigation from "../TopNavigation/TopNavigation"

export default function ContentContainer(){
    return (
        <div className="content-container">
            <TopNavigation></TopNavigation>
            <div className="content-list"></div>
        </div> 
    )
}

