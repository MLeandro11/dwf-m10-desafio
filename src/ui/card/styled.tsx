import styled from "styled-components";

export const MyCard = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  /* height: 322px; */
  overflow: hidden;
  border-radius: 4px;
  border: 4px solid black;
  & > img:hover {
    transform: scale(1.05);
  }
  & > img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 234px;
    transition: transform 0.3s ease-in-out;
  }

  @media (min-width: 769px) {
    max-width: 345px;
  }
`;
export const FooterCard = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding: 20px;
  gap: 4px;
  transition: background-color 0.3s ease-in-out;
  & > h4 {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
