import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '../../main-styles/style';


const Input = () => {
  const [color, setcolor] = useState(false)
  const [value, setValue] = useState('')
  const [time, setTime] = useState('')

  const texarea = (e) => {
    if (e.target.value.length >= 1) {
      setcolor(true)
      setValue(e.target.value)
    } else {
      setcolor(false)
    }
  }

  const getCurrentTime = () => {
    let time = new Date().getHours()
    setTime(time)
  }

  const post = async (e) => {
    getCurrentTime()
    if (e.key === 'Enter') {
      console.log(value)
      await axios.post('http://localhost:3000/posts', {
        title: value,
        author: 'voyager',
        time: time
      })
    }
  }

  return (
    <section className='border-t-[1px] mt-3 px-3'>
      <div>
        <form className='flex items-center'>
          <div>
            <svg aria-label="Emoji" className='mr-3 cursor-pointer' color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
          </div>
          <textarea
            onChange={texarea}
            value={value}
            className='w-full pt-5 outline-none bg-transparent text-[14px] resize-none'
            type='text'
            placeholder='Add a comment...'
            onKeyDown={post}
          />
          <Button className={color ? 'text-[#0995F6] !text-[14px]' : 'text-[#B3DFFC] !text-[14px]'}>Post</Button>
        </form>
      </div>
    </section>
  );
}

export default Input;
