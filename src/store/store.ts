import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from "./messagesSlice"
import userReviewsReducer from "./userReviewsSlice";
import paymentReducer from "./paymentSlice";
import serviceReducer from "./ServiceCategorySlice";

export default configureStore({
    reducer: {
        messages: messagesReducer,
        userReviews: userReviewsReducer,
        payments: paymentReducer,
        serviceCategories: serviceReducer,
    },
})
