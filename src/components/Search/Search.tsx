import { useAppDispatch } from '../../App';
import { searchCrypto } from '../../store/slices/Crypto';
import Icon from '../Icon/Icon';
import styles from './Search.module.scss';

import { useState } from 'react';

type Props = {};

const Search = (props: Props) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    const timer = setTimeout(() => {
      dispatch(searchCrypto(e.target.value));
    }, 500);

    return () => clearTimeout(timer);
  };

  const handleClearSearch = () => {
    setSearchText('');
    dispatch(searchCrypto(''));
  };

  return (
    <div className="mt-5 w-100 d-flex justify-content-center align-items-center">
      <div className={styles.search}>
        <Icon name="AiOutlineSearch" size={22} color="white" />
        <input
          type="text"
          placeholder="Search cryptocurrency"
          value={searchText}
          onChange={(e) => handleSearch(e)}
        />

        <span
          onClick={handleClearSearch}
          className={`${searchText ? 'visible' : 'invisible'}`}
        >
          <Icon name="AiFillCloseCircle" size={22} color="white" />
        </span>
      </div>
    </div>
  );
};

export default Search;
