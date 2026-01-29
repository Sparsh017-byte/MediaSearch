import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';


const SearchBar = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const SubmitHandler = (e) =>{
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
        console.log("query sent")
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            SubmitHandler(e);
        }} className='flex bg-(--c1) gap-5 py-10 px-10'>
            <input type="text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }} className='w-full px-6 py-3 border-2 text-xl rounded outline-none' />
            <button className='active:scale-95 cursor-pointer border-2 outline-none text-xl px-6 py-3'>Submit</button>
        </form>
      
    </div>
  )
}

export default SearchBar
