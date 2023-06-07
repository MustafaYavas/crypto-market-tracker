import { GiHamburgerMenu } from 'react-icons/gi';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineSupportAgent,
  MdOutlineUpdate,
  MdMail,
} from 'react-icons/md';
import { BiHappyHeartEyes } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

type Props = {
  name: string;
  className?: string;
  size: number;
  color?: string;
};

const Icon = ({ name, className, size, color }: Props) => {
  if (name === 'GiHamburgerMenu') {
    return (
      <GiHamburgerMenu
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'MdOutlineKeyboardArrowRight') {
    return (
      <MdOutlineKeyboardArrowRight
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'BiHappyHeartEyes') {
    return (
      <BiHappyHeartEyes
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'MdOutlineUpdate') {
    return (
      <MdOutlineUpdate
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'MdOutlineSupportAgent') {
    return (
      <MdOutlineSupportAgent
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'FaLinkedin') {
    return (
      <FaLinkedin
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'AiFillGithub') {
    return (
      <AiFillGithub
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else if (name === 'MdMail') {
    return (
      <MdMail
        className={className}
        size={size}
        color={color ? color : 'black'}
      />
    );
  } else {
    return null;
  }
};

export default Icon;
