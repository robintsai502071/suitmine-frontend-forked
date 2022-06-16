import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function FilterBar() {
  return (
    <>
      <DropdownButton className="h6" id="dropdown-item-button" title="顏色">
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton className="h6" id="dropdown-item-button" title="種類">
        <Dropdown.Item as="button">西裝類</Dropdown.Item>
        <Dropdown.Item as="button">襯衫類</Dropdown.Item>
        <Dropdown.Item as="button">西裝褲類</Dropdown.Item>
        <Dropdown.Item as="button">配件類</Dropdown.Item>
      </DropdownButton>

      <DropdownButton className="h6" id="dropdown-item-button" title="價格">
        <Dropdown.Item as="button">1000以下</Dropdown.Item>
        <Dropdown.Item as="button">1001~3000</Dropdown.Item>
        <Dropdown.Item as="button">3001~6000</Dropdown.Item>
        <Dropdown.Item as="button">6000以上</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
export default FilterBar;
