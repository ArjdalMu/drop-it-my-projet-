import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auto-slice';
const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
    },
});
export default store;