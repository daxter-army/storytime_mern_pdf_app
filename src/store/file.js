import { createSlice } from '@reduxjs/toolkit'

const initialFileState = { fileUploading: false }

const fileSlice = createSlice({
    name: 'file',
    initialState: initialFileState,
    reducers: {
        uploading(state) {
            state.fileUploading = true
        },
        uploaded(state) {
            state.fileUploading = false
        }
    }
})

export const fileActions = fileSlice.actions
export default fileSlice.reducer