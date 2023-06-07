import { configureStore } from "@reduxjs/toolkit";
import dragDropReducer from '../Components/DragDropUpload/dragDropSlice'

export const store = configureStore({
    reducer: {
        dragDrop: dragDropReducer,
    }
});