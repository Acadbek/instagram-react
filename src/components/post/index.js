import React, { useState, useEffect } from "react";
import User from "../user";
import axios from "axios";
import { Card, PostContainer } from "../../main-styles/style";
import Details from "./details";

const Post = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/photos", {
        params: {
          _limit: 20,
        },
      });
      let post = res.data;
      setData(post);
      getData();
    };
  }, []);

  return (
    <Card>
      <PostContainer>
        <User
          open={props.open}
          name="hakimov"
          location="Uzbekistan"
          image="https://picsum.photos/200/300"
          classForImage="w-[32px] h-[32px] rounded-full"
        />
      </PostContainer>
      <Details
        post="⚒️. HTML input Types If you found it useful! 🤝 Follow me @sourav_code 📢 Hey, I am a Web Developer From India, Helping people learn web development. I Twee HTML CSS JavaScript, React, & More Tips & Web Development Tag________ #html5 #jsvascript #puthon #javadevelopers #html5website #cssanimations #mysqlworkbench #javascript #pythondeveloper #programinglife #htmltips #csstips #developer #reactjsdeveloper #angular #veujs #programmingboy #phpdeveloper #coding #websitedesigner #programming #programmingtime"
        likesCount="5444"
        name="hakimov"
        commentsCount='4'
        data='4'
      />
    </Card>
  );
};

export default Post;
