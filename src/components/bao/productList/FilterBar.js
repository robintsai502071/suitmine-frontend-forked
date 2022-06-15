import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function FilterBar() {
  return (
    <>
      <DropdownButton className="h6"  id="dropdown-item-button" title="顏色">
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton className="h6" id="dropdown-item-button" title="種類">
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton className="h6" id="dropdown-item-button" title="價格">
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
export default FilterBar;
