import React from 'react';
import { useState } from 'react';

const Search = () => {
  let [isActiveSearchIcon, setSearchIcon] = useState(true)

  const handleInput = (e) => {
    if(e.target.id === 'input') {
      setSearchIcon(isActiveSearchIcon = false)
    }else{
      setSearchIcon(isActiveSearchIcon = true)
    }
  }

  return (
    <div className='relative'>
      {isActiveSearchIcon ?
        <svg className='absolute top-[10px] left-[16px]' aria-label="Search" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16">
          <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          </path>
          <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22">
          </line>
        </svg> : <></>}
      <input id='input' onClick={handleInput} className='w-[268px] h-[36px] pl-[40px] bg-[#EFEFEF] rounded-lg focus:outline-none' type='text' placeholder='Search' />
    </div>
  );
}

export default Search;
// 6