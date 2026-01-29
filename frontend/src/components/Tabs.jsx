import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice';


const Tabs = () => {
    const tabs = ['photos','videos'];
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state.search.activeTab);
  return (
    <div className='flex p-10 gap-5'>
        {tabs.map((elem,ind)=>{
            return(
                <button 
                key={ind} 
                className={`${(elem == activeTab? 'bg-blue-700':'bg-gray-500')} cursor-pointer transition active:scale-95 px-5 py-2 uppercase `}
                onClick={()=>{
                    dispatch(setActiveTab(elem))
                }}
                >

                    {elem}
                </button>
            )
        })}
      
    </div>
  )
}

export default Tabs
