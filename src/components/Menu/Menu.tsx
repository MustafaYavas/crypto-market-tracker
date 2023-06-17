import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Icon from '../Icon/Icon';

type DropdownProps = {
  name?: string;
  items: string[];
  links?: string[];
  type: string;
};

const Menu = ({ name, items, links, type }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown show={isOpen}>
      <Dropdown.Toggle
        variant="transparent"
        style={{
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
        onClick={() => setIsOpen(true)}
      >
        <Icon name="GiHamburgerMenu" size={20} color="white" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) =>
          type === 'link' ? (
            <NavLink
              className="d-block px-2 text-black text-decoration-none my-1"
              to={links![index]}
              key={item}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ) : (
            <Dropdown.Item className="my-1" key={item}>
              {item}
            </Dropdown.Item>
          )
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menu;
