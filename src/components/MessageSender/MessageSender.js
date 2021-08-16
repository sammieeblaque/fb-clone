import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import "./MessageSender.css";
import { useStateValue } from "../../context/StateProvider";
import db from "../../firebase";
import firebase from "firebase";

export default function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageUrl,
    });
    setImageUrl("");
    setInput("");
  };
  return (
    <div className="message__sender">
      <div className="message__sender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message__sender__input"
            placeholder={`What's on your mind, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="imag e URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="message__sender__bottom">
        <div className="message__sender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message__sender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message__sender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}
