import styled from "styled-components";

export const Container = styled.div`
  max-width: 975px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  color: ${({ blackColor }) => (blackColor ? "black" : "")};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;
export const Title = styled.p`
  color: var(--colorTitle);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
export const SubTitle = styled.p`
  color: ${({ colorForLocation }) =>
    colorForLocation ? "#828282" : "var(--greyColor)"};
  font-size: ${({ fontSizeForLocation }) =>
    fontSizeForLocation ? "11px" : "12px"};
  font-weight: ${({ fontWeightForLocation }) =>
    fontWeightForLocation ? "400" : "600"};
`;

export const Card = styled.div`
  border: solid 1.5px #e5e7eb;
  border-radius: 10px;
  padding-top: 15px;
  margin-bottom: 50px;
`;

export const PostContainer = styled.div`
  padding: 0 10px;
`;

export const Hashtag = styled.span`
  color: #00376b;
  font-weight: 500;
  font-size: 15px;
`;

//``
