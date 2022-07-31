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
          isFavorite={props?.isFavorite}
          open={props?.open}
          name={props?.name}
          location={props?.location}
          image={props?.imageUser}
          classForImage="w-[32px] h-[32px] rounded-full"
        />
      </PostContainer>
      {/* "⚒️.HTML input Types If you found it useful! 🤝 Follow me @sourav_code 📢 Hey, I am a Web Developer From India, Helping people learn web development. I Twee HTML CSS JavaScript, React, & More Tips & Web Development Tag________ #html5 #jsvascript #puthon #javadevelopers #html5website #cssanimations #mysqlworkbench #javascript #pythondeveloper #programinglife #htmltips #csstips #developer #reactjsdeveloper #angular #veujs #programmingboy #phpdeveloper #coding #websitedesigner #programming #programmingtime" */}
      <Details
        image={props?.image}
        post={props?.posts}
        likesCount={props?.likesCount}
        name={props?.name}
        commentsCount={props?.commentsCount}
      />
    </Card>
  );
};

export default Post;
