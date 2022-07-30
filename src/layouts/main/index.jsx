import React, { useState } from "react";
import Modal from "../../components/modal";
import Post from "../../components/post";
import Sidebar from "../../components/sidebar";
import Stories from "../../components/stories";
import { Container } from "../../main-styles/style";
import "./style.css";

const Main = () => {
  const [statusModal, setStatusModal] = useState(false);

  const openModal = () => {
    setStatusModal(!statusModal);
    document.body.style.overflow = "hidden";
  };

  const cancel = () => {
    setStatusModal(!statusModal);
    document.body.style.overflow = "visible";
  };


  window.addEventListener("click", (e) => {
    if (e.target.id === "close") {
      setStatusModal(false);
      document.body.style.overflow = "visible";
    }
  });

  return (
    <Container>
      {statusModal && <Modal cancel={cancel}/>}
      <div className="main grid grid-cols-12 gap-2 relative">
        <div className="col-span-1"></div>
        <div className="col-span-6 ">
          <Stories />
          <Post open={openModal} />
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
