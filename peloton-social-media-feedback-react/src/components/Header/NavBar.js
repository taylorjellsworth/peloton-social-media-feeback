import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import mainLogo from "../../assets/peloton_logo.svg";
import SearchBar from "./SearchBar";

function NavBar() {
  const dispatchRedux = useDispatch();
  const { selectedProduct, selectedSocialMedia } = useSelector(appState => appState);
  const displaySearchBar = selectedProduct === "All";

  return (
    <Nav>
      <Link to="/">
        <img
          onClick={() => dispatchRedux({ type: "RESET" })}
          height="75"
          width="90"
          viewBox="0 0 25 36"
          src={mainLogo}
          alt="peloton-home-logo"
        />
      </Link>
      {displaySearchBar && (
        <DropdownContainer>
          <SearchBar />
        </DropdownContainer>
      )}
      {!displaySearchBar && (
        <DropdownContainer>
          <DropdownMenu product={selectedProduct} socialMedia={selectedSocialMedia} />
        </DropdownContainer>
      )}
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  background-color: #F5F7F9;
  text-align: left;
  margin-bottom: 50px;
  class= navbar navbar-light;
`;

const DropdownContainer = styled.div`
  display: inline-block;
  float: right;
  margin-top: 20px;
  margin-right: 20px;
`;
