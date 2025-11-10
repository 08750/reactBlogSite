import React, { useState } from "react";
import LikedImg from "../assets/img/thumb_up.svg";
import LikecolorImg from "../assets/img/thumb_up_color.svg";
import BadImg from "../assets/img/thumb_down.svg";
import BadcolorImg from "../assets/img/thumb_down_color.svg";

const BamosCard = ({ item }) => {
  const [liked, setLiked] = useState(item.thumbsUp);
  const [bad, setBad] = useState(item.thumbsDown);
  const [likedActive, setLikedActive] = useState(false);
  const [badActive, setBadActive] = useState(false);

  const handleGoodClick = () => {
    if (likedActive) {
      setLiked(liked - 1);
    } else {
      setLiked(liked + 1);
    }
    setLikedActive(!likedActive);
  };

  const handleBadClick = () => {
    if (badActive) {
      setBad(bad - 1);
    } else {
      setBad(bad + 1);
    }
    setBadActive(!badActive);
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />
      <h2>[{item.category}]</h2>
      <h2>{item.title}</h2>

      <p>{item.author}</p>

      <div className="buttons">
        <button
          className={`liked ${
            likedActive ? (
              <img src={LikedImg} alt="いいねボタン" />
            ) : (
              <img src={LikecolorImg} alt="いいねボタン" />
            )
          }`}
          onClick={handleGoodClick}
        >
          <img src={LikedImg} alt="いいねボタン" />
          {liked}
        </button>
        <button
          className={`bad ${badActive ? "active" : ""}`}
          onClick={handleBadClick}
        >
          <img src={BadImg} alt="う〜んボタン" />
          {bad}
        </button>
      </div>
    </div>
  );
};

export default BamosCard;
