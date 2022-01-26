import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from "./messagesSlice"
import userReviewsReducer from "./userReviewsSlice";
import paymentReducer from "./paymentSlice";
import serviceCategoryReducer from "./ServiceCategorySlice";
import serviceSupplierReducer from "./ServiceSupplierSlice";
import authReducer from "./authSlice";
import faqReducer from "./faqSlice";
import cityReducer from "./citiesSlice";
import dashboardReducer from "./dashboardSlice";

export default configureStore({
    reducer: {
        messages: messagesReducer,
        userReviews: userReviewsReducer,
        payments: paymentReducer,
        serviceCategories: serviceCategoryReducer,
        serviceSuppliers: serviceSupplierReducer,
        auth: authReducer,
        faqs: faqReducer,
        cities: cityReducer,
        dashboard: dashboardReducer
    },
})
