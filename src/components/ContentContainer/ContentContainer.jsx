import { FaHashtag } from "react-icons/fa";
import TopNavigation from "../TopNavigation/TopNavigation";
import "./ContentContainer.css";

export default function ContentContainer() {
  return (
    <div className="content-container">
      <TopNavigation></TopNavigation>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
      <Post
        name="Ada"
        timestamp="one week ago"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Post>
    </div>
  );
}

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-wrapper">
          {/* <h2>test</h2> */}
          <img
            src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
            alt=""
            className="avatar"
          />
        </div>
        <div className="post-body">
          <div className="post-author">
            <h5>{name}</h5>
            <h6 className="text-xs">{timestamp}</h6>
          </div>
          <div className="post-content">{text}</div>
        </div>
      </div>
    </div>
  );
};
