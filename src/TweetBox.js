import { Avatar ,Button } from '@material-ui/core';
import React, {useState} from 'react';
import './TweetBox.css';
import db from './config';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Poorvi",
      username: "poorvi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqKSf7pEKebHDLt1mfYgo1_9LT7c06CMkBg&usqp=CAU",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqKSf7pEKebHDLt1mfYgo1_9LT7c06CMkBg&usqp=CAU" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
  }

export default TweetBox


