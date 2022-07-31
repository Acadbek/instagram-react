import React, { useState } from "react";
import Modal from "../../components/modal";
import Post from "../../components/post";
import Sidebar from "../../components/sidebar";
import Stories from "../../components/stories";
import { Container } from "../../main-styles/style";
import "./style.css";

const Main = () => {
  const [statusModal, setStatusModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState("Add to favorites");

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
          <Post isFavorite={isFavorite} open={openModal} />
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
