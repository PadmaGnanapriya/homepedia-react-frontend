import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from "./messagesSlice"
import userReviewsReducer from "./userReviewsSlice";
import paymentReducer from "./paymentSlice";
import serviceCategoryReducer from "./ServiceCategorySlice";
import serviceSupplierReducer from "./ServiceSupplierSlice";

export default configureStore({
    reducer: {
        messages: messagesReducer,
        userReviews: userReviewsReducer,
        payments: paymentReducer,
        serviceCategories: serviceCategoryReducer,
        serviceSuppliers: serviceSupplierReducer,
    },
})
