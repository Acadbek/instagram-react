import React, { useState, useEffect } from "react";
import User from "../user";
import { Card, PostContainer } from "../../main-styles/style";
import Details from "./details";

const Post = (props) => {

  const open = () => {
    console.log('kksmlfkmsmdflkm')
  }

  return (
    <Card>
      <PostContainer>
        <User
          isFavorite={props.isFavorite}
          open={props.open}
          name="hakimov"
          location="Uzbekistan"
          image="https://picsum.photos/200/300"
          classForImage="w-[32px] h-[32px] rounded-full"
        />
      </PostContainer>
      <Details
        post="⚒️.HTML input Types If you found it useful! 🤝 Follow me @sourav_code 📢 Hey, I am a Web Developer From India, Helping people learn web development. I Twee HTML CSS JavaScript, React, & More Tips & Web Development Tag________ #html5 #jsvascript #puthon #javadevelopers #html5website #cssanimations #mysqlworkbench #javascript #pythondeveloper #programinglife #htmltips #csstips #developer #reactjsdeveloper #angular #veujs #programmingboy #phpdeveloper #coding #websitedesigner #programming #programmingtime"
        likesCount="5444"
        name="hakimov"
        commentsCount='4'
      />
    </Card>
  );
};

export default Post;
