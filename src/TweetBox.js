import React from 'react'
import "./TweetBox.css";
import {Avatar, Button } from "@material-ui/core"

function TweetBox() {
  return (
    <div className="tweetbox" >
        <form>
            <div className="tweetBox__input">
                <Avatar src="" />
                <input placeholder="Whats happening?"/>
            </div>
            <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
            <Button className='tweetBox__tewwtButton' >Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox