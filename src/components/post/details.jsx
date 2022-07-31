import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, PostContainer, Title } from "../../main-styles/style";
import NumberFormat from "react-number-format";
import Input from "./input";

const Details = (props) => {
  const [textLength, setTextLength] = useState(25);
  const [statusBtn, setStatusBtn] = useState(true);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");

  const more = () => {
    setTextLength(1000);
    setStatusBtn(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      // let array = [];
      await axios
        .get("http://localhost:3000/data")
        .then((res) => setComments(res.data));
    };
    fetchData();
  }, [setComments]);

  const deleteComment = (e) => {
    let index = e.target.id;
    axios.delete(`http://localhost:3000/data/${index}`).then(() => {
      console.log("Delete successful");
    });
  };

  return (
    <div>
      <img
        className="w-full h-full object-cover"
        alt="photos"
        src={props.image}
        width="450px"
        height="450px"
      />
      <PostContainer>
        <Flex>
          <div className="flex items-center gap-4 my-3 flex-nowrap">
            <svg
              className="cursor-pointer"
              aria-label="Activity Feed"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
            <svg
              className="cursor-pointer"
              aria-label="Comment"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <svg
              className="cursor-pointer"
              aria-label="Share Post"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </div>
          <div>
            <svg
              className="cursor-pointer"
              aria-label="Save"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </div>
        </Flex>
        <div className="flex gap-1">
          <NumberFormat
            value={props?.likesCount}
            displayType="text"
            thousandSeparator={true}
            className="text-[14px] font-[600] text-[#292929]"
          />
          <p className="text-[14px] font-[600] text-[#292929]"> likes</p>
        </div>
        <div className="flex gap-1 mt-2">
          <span className="!text-[#292929] text-[14px] font-[600]">
            {props?.name}
            <span className="font-[400] text-sm text-[#262626]">
              {`${props?.post.substring(0, textLength)}... `}
            </span>
            {statusBtn ? (
              <button className="text-[#8E8E8E] font-light" onClick={more}>
                more
              </button>
            ) : (
              <></>
            )}
          </span>
        </div>
        <p className="text-[14px] text-[#8E8E8E] mt-2">
          View all {props?.commentsCount} comments
        </p>
        {comments?.map((item) => (
          <div key={item.id} className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <Title>{item?.author}</Title>
              <p
                id={item?.id}
                onClick={deleteComment}
                className="font-[400] text-sm text-[#262626]"
              >
                {item?.title}
              </p>
            </div>
            <p className="text-[10px] text-[#8E8E8E] mt-2 font-extralight">
              {item?.time} HOURS AGO
            </p>
          </div>
        ))}
      </PostContainer>
      <Input />
    </div>
  );
};

export default Details;
