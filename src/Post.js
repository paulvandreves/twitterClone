import { Avatar } from '@mui/material';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import React from 'react'
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat'; 
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; 
import PublishIcon from '@material-ui/icons/Publish'; 

function Post({
    displayName,
    username,
    verified,
    //timestamp,
    text,
    image,
    avatar
}) {
    return (
        <div className='post' >
            <div className="post__avatar" >
                <Avatar src=""></Avatar>
            </div>

            <div className="post__body" >
                <div className='post__header' >
                    <div className='post__headerText' >
                        <h3>
                            Rafeh Qazi <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>

                    <div className='post__headerDescription' ></div>
                    <p>React Twitter clone</p>
                </div>
            </div>
        <img src="https://c.tenor.com/khJthyXJxtcAAAAS/ken-jeong-community.gif" />
        <div className="post__footer" >
            <ChatBubbleOutlineIcon fontSize="small"  />
             <RepeatIcon fontSize="small" /> 
            <FavoriteBorderIcon fontSize="small"  />  
            <PublishIcon fontSize="small" />
        </div>
        

        </div>
    );
}

export default Post