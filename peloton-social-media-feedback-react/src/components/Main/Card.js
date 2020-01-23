import React from "react";
import { withRouter } from "react-router";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { SocialIcon } from "react-social-icons";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const socialMediaList = ["twitter", "facebook", "reddit"];

function reducer(prevState, { type }) {
  switch (type) {
    case "CARD_FLIPPED":
      return !prevState;
    default:
      return prevState;
  }
}

function Card({ product, image, history }) {
  const dispatchRedux = useDispatch();
  const [flippedState, flippedDispatch] = React.useReducer(reducer, false);

  const goToRetreiveAPI = (history, product, socialMedia) => {
    let pathname = `/${product}/${socialMedia}`;
    dispatchRedux({
      type: "SELECTED_SEARCH_REQUIREMENT",
      payload: { product, socialMedia, searchTerm: "" }
    });
    history.push(pathname);
  };

  return (
    <div align="center" className="col-lg-3 col-md-4 col-12 mb-5 animated fadeIn">
      <div
        onClick={!flippedState ? () => flippedDispatch({ type: "CARD_FLIPPED" }) : null}
        onMouseLeave={flippedState ? () => flippedDispatch({ type: "CARD_FLIPPED" }) : null}
      >
        <Image src={image} />
        <Flippy isFlipped={flippedState}>
          <FrontSide style={{ backgroundColor: "white" }}>
            <div className="card-body">
              <h4 className="card-title">{product}</h4>
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "white" }}>
            <div className="row justify-content-around h-100 d-flex justify-content-center align-items-center">
              {socialMediaList.map((socialMedia, index) => (
                <SocialIcon
                  network={socialMedia}
                  fgColor="white"
                  onClick={() => goToRetreiveAPI(history, product, socialMedia)}
                  key={index}
                />
              ))}
            </div>
          </BackSide>
        </Flippy>
      </div>
    </div>
  );
}

export default withRouter(Card);

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
