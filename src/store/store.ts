import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from "./messagesSlice"
import userReviewsReducer from "./userReviewsSlice";

export default configureStore({
    reducer: {
        messages: messagesReducer,
        userReviews: userReviewsReducer
    },
})
