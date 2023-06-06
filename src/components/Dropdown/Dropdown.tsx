type DropdownProps = {
  name?: string;
  items: string[];
  links?: string[];
  type: string;
};

const Dropdown = ({ name, items, links, type }: DropdownProps) => {
  return <div>Dropdown</div>;
};

export default Dropdown;
