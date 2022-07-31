import React, { useState } from "react";
import Modal from "../../components/modal";
import Post from "../../components/post";
import Sidebar from "../../components/sidebar";
import Stories from "../../components/stories";
import img from "../../assets/logo.png";
import img2 from "../../assets/user.jpeg";
import { Container } from "../../main-styles/style";
import "./style.css";

const Main = () => {
  const [statusModal, setStatusModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState("Add to favorites");
  const data = [
    {
      id: 1,
      name: "nn.asad ",
      imageUser: "https://picsum.photos/200/300?random=1",
      posts:
        "⚒️.HTML input Types If you found it useful! 🤝 Follow me @sourav_code 📢 Hey, I am a Web Developer From India, Helping people learn web development. I Twee HTML CSS JavaScript, React, & More Tips & Web Development Tag________ #html5 #jsvascript #puthon #javadevelopers #html5website #cssanimations #mysqlworkbench #javascript #pythondeveloper #programinglife #htmltips #csstips #developer #reactjsdeveloper #angular #veujs #programmingboy #phpdeveloper #coding #websitedesigner #programming #programmingtime",
      commentCount: 4,
      likesCount: 133,
      image:
        "https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
    },
    {
      id: 2,
      name: "handemiyy ",
      imageUser: `https://picsum.photos/200/300?random=2`,
      posts:
        "⚒️.HTML input Types If you found it useful! 🤝 Follow me @sourav_code 📢 Hey, I am a Web Developer From India, Helping people learn web development. I Twee HTML CSS JavaScript, React, & More Tips & Web Development Tag________ #html5 #jsvascript #puthon #javadevelopers #html5website #cssanimations #mysqlworkbench #javascript #pythondeveloper #programinglife #htmltips #csstips #developer #reactjsdeveloper #angular #veujs #programmingboy #phpdeveloper #coding #websitedesigner #programming #programmingtime",
      commentCount: 4,
      likesCount: 11215,
      isFavorite: isFavorite,
      image:
        "https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE",
    },
    {
      id: 3,
      name: "handemiyy ",
      imageUser: `https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM`,
      posts:
        "⚒️.HTML input Types If you found it useful! 🤝 Follow me @sourav_code 📢 Hey, I am a Web Developer From India, Helping people learn web development. I Twee HTML CSS JavaScript, React, & More Tips & Web Development Tag________ #html5 #jsvascript #puthon #javadevelopers #html5website #cssanimations #mysqlworkbench #javascript #pythondeveloper #programinglife #htmltips #csstips #developer #reactjsdeveloper #angular #veujs #programmingboy #phpdeveloper #coding #websitedesigner #programming #programmingtime",
      commentCount: 8545,
      likesCount: 1121231,
      isFavorite: isFavorite,
      image:
        "https://i.picsum.photos/id/2/5616/3744.jpg?hmac=l1XcSPFigtRLcO2F6Li-t17EIeylkWH94Oowb4vzApk",
    },
  ];

  const bodyOverFlowStatus = (x) => {
    document.body.style.overflow = x;
  };

  const openModal = () => {
    setStatusModal(!statusModal);
    bodyOverFlowStatus("hidden");
  };

  const cancel = () => {
    setStatusModal(!statusModal);
    bodyOverFlowStatus("visible");
  };

  const addFavorite = (e) => {
    setStatusModal(false);
    bodyOverFlowStatus("visible");
    setTitle("Remove from favorites");
  };

  window.addEventListener("click", (e) => {
    if (e.target.innerText === "Remove from favorites") {
      setTimeout(() => {
        setIsFavorite(false);
      }, 400);
      setTitle("Add to favorites");
    }
    if (e.target.innerText === "Add to favorites") {
      setTimeout(() => {
        setIsFavorite(true);
      }, 400);
      setTitle("Remove from favorites");
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target.id === "close") {
      setStatusModal(false);
      bodyOverFlowStatus("visible");
    }
  });

  return (
    <Container>
      {statusModal && (
        <Modal title={title} addFavorite={addFavorite} cancel={cancel} />
      )}
      <div className="main grid grid-cols-12 gap-2 relative">
        <div className="col-span-1"></div>
        <div className="col-span-6">
          <div className="mb-4">
            <Stories />
          </div>
          {data.map((item) => (
            <Post
              key={item.id}
              name={item.name}
              location={item.location}
              imageUser={item.imageUser}
              likesCount={item.likesCount}
              image={item.image}
              posts={item.posts}
              commentCount={item.commentCount}
              isFavorite={isFavorite}
              open={openModal}
            />
          ))}
        </div>
        <div className="col-span-4 ml-5">
          <Sidebar />
        </div>
        <div className="col-span-1"></div>
      </div>
    </Container>
  );
};

export default Main;
