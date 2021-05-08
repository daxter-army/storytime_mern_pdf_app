// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import fileReducer from './file'

const store = configureStore({ 
    reducer: { file: fileReducer }
 })

export default store