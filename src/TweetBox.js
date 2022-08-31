import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core"
import db from './firebase'; 

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState(''); 
  const [tweetImage, setTweetImage] = useState(''); 

  const sendTweet = e => {
    e.preventDefault(); // To prevent Refresh on submit 

    db.collection('posts').add({
      displayName: "Pauly",
      username: 'Paully van diesel',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 
      "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
    }); 

    setTweetMessage(""); // Reset the fields after posting info 
    setTweetImage("");
  }

  return (
    <div className="tweetbox" >
        <form>
            <div className="tweetBox__input">
                <Avatar src="" />
                <input  
                 onChange={e => setTweetMessage(e.target.value)}
                 value={tweetMessage} 
                 placeholder="Whats happening?"
                 type="text"
                 />
            </div>
            <input 
             value={tweetImage}
             onChange={e => setTweetImage(e.target.value)}
             className="tweetBox__imageInput"
             placeholder="Enter image URL" 
             type="text" />

            <Button onClick={sendTweet} type="submit" className='tweetBox__tewwtButton' >Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox