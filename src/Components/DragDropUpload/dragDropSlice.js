import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    src: './Asset/undraw_no_data.svg',
    fileName: 'default'
};

const dragDropSlice = createSlice({
    name: 'dragDrop',
    initialState,
    reducers: {
        setEncodedImg: {
            reducer(state, action) {
                state.src = action.payload.src;
                state.fileName = action.payload.name;
            },
            prepare(src, name) {
                return {
                    payload: {
                        src,
                        name
                    }
                }
            }
        }
    }
});

export const selectedFile = (state) => state.dragDrop;

export const { setEncodedImg } = dragDropSlice.actions;

export default dragDropSlice.reducer;