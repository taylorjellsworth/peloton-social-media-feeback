import React from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { socialMediaList } from "../Main/Card";
import styled from "styled-components";

function SearchBar({ history }) {
  const dispatchRedux = useDispatch();
  const [socialMedia, setSocialMedia] = React.useState("");
  const [{ searchText }, setFormState] = React.useState({ searchText: "" });
  const isEnabled = socialMedia !== "" && searchText !== "";

  const updateForm = e => {
    let searchText = e.target.value;
    setFormState(prevState => {
      const newState = { ...prevState, searchText: searchText };
      return newState;
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let pathname = `/${searchText}/${socialMedia}`;
    dispatchRedux({
      type: "SELECTED_SEARCH_REQUIREMENT",
      payload: { searchText, socialMedia }
    });
    history.push(pathname);
  };

  return (
    <div className="form-group">
      <div className="input-group mb-3">
        <DropdownButton
          id="search-dropdown"
          drop="down"
          title={<SocialIcon network={socialMedia} fgColor="white" style={{ height: 25, width: 25 }} />}
        >
          {socialMediaList.map((socialMedia, index) => (
            <Dropdown.Item key={index} onSelect={() => setSocialMedia(prevState => socialMedia)}>
              <SocialIcon network={socialMedia} fgColor="white" />
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <SearchBarContainer>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              name="text"
              placeholder="Search"
              value={searchText}
              onChange={updateForm}
            />
            <button
              className="btn btn-secondary my-2 my-sm-0"
              id="nav-dropdown"
              type="submit"
              onClick={handleSubmit}
              disabled={!isEnabled}
            >
              Search
            </button>
          </form>
        </SearchBarContainer>
      </div>
    </div>
  );
}

export default withRouter(SearchBar);

const SearchBarContainer = styled.div`
  display: inline-flex;
  float: right;
`;
