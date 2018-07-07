import React from 'react';
import './SearchInput.css';
const SearchInput = (props) => {
    console.log(props);
    return (
        <div className="search-wrap">
            <input type="text" className="input" placeholder="搜索您喜欢的"/><span className="icon">o</span>
        </div>
    )
};
export default SearchInput;