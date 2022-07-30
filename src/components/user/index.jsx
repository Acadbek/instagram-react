import React from "react";
import { Button, Flex, SubTitle, Title } from "../../main-styles/style";
import Doots from "../doots";
const User = (props) => {
  return (
    <Flex>
      <div className="flex items-center mb-3 cursor-pointer">
        <img
          className={props?.classForImage}
          alt="userPhoto"
          src={props?.image}
        />
        <div className="ml-[13px]">
          <Title className="hover:underline">{props?.name}</Title>
          {props?.location ? (
            <SubTitle
              colorForLocation={true}
              fontSizeForLocation={true}
              fontWeightForLocation={true}
            >
              {props?.location}
            </SubTitle>
          ) : (
            <SubTitle>{props?.subTitle}</SubTitle>
          )}
        </div>
      </div>
      {props.isActive ? (
        <Button className="text-[#0995F6]">{props?.btnTitle}</Button>
      ) : (
        <div className="flex items-center gap-5">
          {props.isFavorite && (
            <svg
              id="Favorited"
              aria-label="Favorited"
              fill="url(#favorite_icon_gradient)"
              height="16"
              viewBox="0 0 24 24"
              width="16"
            >
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="favorite_icon_gradient"
                  x1="11.0831"
                  x2="20.5113"
                  y1="20.7141"
                  y2="4.71407"
                >
                  <stop stopColor="#FDCB5C"></stop>
                  <stop offset="1" stopColor="#D10869"></stop>
                </linearGradient>
              </defs>
              <path d="M18.18 22.51a.99.99 0 01-.513-.142L12 18.975l-5.667 3.393a1 1 0 01-1.492-1.062l1.37-6.544-4.876-4.347a.999.999 0 01.536-1.737l6.554-.855 2.668-5.755a1 1 0 011.814 0l2.668 5.755 6.554.855a.999.999 0 01.536 1.737l-4.876 4.347 1.37 6.544a1 1 0 01-.978 1.205z"></path>
            </svg>
          )}

          <Doots open={props?.open} />
        </div>
      )}
    </Flex>
  );
};

export default User;
