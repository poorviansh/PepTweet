import React from 'react';
import './Widgets.css';
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function Widgets() {
    return (
        <div className= "widgets">
            <div className="widget_input">
              <SearchIcon className="widgets__searchIcon" />
              <input placeholder="Search Twitter" type= "Text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"560070183650213889"}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="PepCoding"
                options={{ height: 400 }}
                />
                <TwitterShareButton
                url={"https://twitter.com/pepcoding?lang=en"}
                options={{ text: "#reactjs is awesome", via: "PepCoding" }}
                />
            </div>
        </div>
    )
}

export default Widgets
