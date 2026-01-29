import { createSlice } from "@reduxjs/toolkit";
import { toast,Zoom } from "react-toastify";

const collectionSlice = createSlice({
    name:"collection",
    initialState:{
        items:JSON.parse(localStorage.getItem("collection")) || []
    },
    reducers:{
        addToCollection:(state,action)=>{
            const exists = state.items.find(
                item => item.id === action.payload.id
            );
            if(!exists){
                state.items.push(action.payload);
                localStorage.setItem('collection',JSON.stringify(state.items));
            }
        },
        removeCollection:(state,action)=>{
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            );
            localStorage.setItem('collection',JSON.stringify(state.items));

        },
        clearCollection:(state)=>{
            state.items = [];
            localStorage.removeItem('collection');
        },
        addedToast: () => {
            toast.success('Added to Collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('Removed from Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
});

export const {addToCollection,removeCollection,clearCollection,addedToast,removeToast} = collectionSlice.actions;
export default collectionSlice.reducer;
