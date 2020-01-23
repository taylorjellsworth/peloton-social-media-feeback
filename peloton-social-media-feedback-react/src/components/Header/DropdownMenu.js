import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { withRouter } from "react-router";
import { products } from "../Main/Home";
import { useDispatch } from "react-redux";

function DropdownMenu({ product, socialMedia, history }) {
  const dispatchRedux = useDispatch();

  const onSelectHandler = (history, product, socialMedia) => {
    let pathname = `/${product}/${socialMedia}`;
    dispatchRedux({
      type: "SELECTED_SEARCH_REQUIREMENT",
      payload: { product, socialMedia }
    });
    history.push(pathname);
  };

  return (
    <DropdownButton alignRight id="nav-dropdown" title={product}>
      {products.map(({ product }, index) => (
        <Dropdown.Item onSelect={() => onSelectHandler(history, product, socialMedia)} key={index}>
          {product}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default withRouter(DropdownMenu);
