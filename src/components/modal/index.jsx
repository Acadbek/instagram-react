import React from "react";

const Modal = (props) => {
  return (
    <div
      id="close"
      className="bg-[#333] opacity-95 border-none fixed top-0 left-0 w-full h-screen z-[999999]"
    >
      <div className="bg-[#fff] rounded-lg max-w-[400px] absolute top-[20%] left-[35%] opacity-1">
        <button className="!w-full rounded-t-lg active:bg-[#0000001a]  text-red-700 py-3 border-b-[1px]  border-solid border-grey-300">
          Report
        </button>
        <button className="active:bg-[#0000001a]  !w-full text-red-700 py-3 border-b-[1px] border-solid border-grey-300">
          Unfollow
        </button>
        <button
          onClick={props.addFavorite}
          className="active:bg-[#0000001a]  !w-full py-3 border-b-[1px] border-solid border-grey-300"
        >
          {props.title}
        </button>
        <button className="active:bg-[#0000001a]  !w-full py-3 border-b-[1px] border-solid border-grey-300">
          Go to post
        </button>
        <button className="active:bg-[#0000001a]  !w-full py-3 border-b-[1px] border-solid border-grey-300">
          Share to...
        </button>
        <button className="active:bg-[#0000001a]  !w-full py-3 border-b-[1px] border-solid border-grey-300">
          Copy link
        </button>
        <button className="active:bg-[#0000001a]  !w-full py-3 border-b-[1px] border-solid border-grey-300">
          Embed
        </button>
        <button
          onClick={props.cancel}
          className="rounded-b-lg active:bg-[#0000001a] !w-full py-3 border-b-[1px] border-solid border-grey-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
