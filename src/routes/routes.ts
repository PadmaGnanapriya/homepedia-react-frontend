import React from "react";
import { ROUTE_PATH } from "../constants/RoutePaths";
import UserReviewManagement from "../views/UserReviewManagement";
import ResetPassword from "../views/ResetPassword";

const Home = React.lazy(() => import('../views/Home'));
const Login = React.lazy(() => import('../views/Login'));
const Register = React.lazy(() => import('../views/Register'));
const About = React.lazy(() => import("../views/About"));
const Contact = React.lazy(() => import("../views/Contact"));
const FindService = React.lazy(() => import('../views/FindService'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));
const MessageManagement = React.lazy(() => import('../views/MessageManagement'));
const ServiceSupplierManagement = React.lazy(() => import('../views/ServiceSupplierManagement'));
const NotificationManagement = React.lazy(() => import('../views/NotificationManagement'));
const TermsAndConditions = React.lazy(() => import('../views/TermsAndConditions'));
const Faq = React.lazy(() => import('../views/Faq'));
const ForgotPassword = React.lazy(() => import('../views/ForgotPassword'));
// const ResetPassword = React.lazy(() => import('../views/ResetPassword'));
const Profile = React.lazy(() => import('../views/Profile'));
const ServiceSupplierOverView = React.lazy(() => import('../views/ServiceSupplierOverview'));
const IncomeManagement = React.lazy(() => import('../views/IncomeManagement'));
const Page404 = React.lazy(() => import('../views/Page404'));
const FaqManagement = React.lazy(() => import('../views/FaqManagement'));

export const routes = [
  { path: ROUTE_PATH.FORGOT_PASSWORD, exact: false, component: ForgotPassword, role: ['Viewer'] },
  { path: ROUTE_PATH.PROFILE, exact: false, component: Profile, role: ['ServiceSupplier'] },

  { path: ROUTE_PATH.DASHBOARD, exact: false, component: Dashboard, role: ['Administrator'] },
  { path: ROUTE_PATH.FAQ_MANAGEMENT, exact: false, component: FaqManagement, role: ['Administrator'] },
  { path: ROUTE_PATH.INCOME_MANAGEMENT, exact: false, component: IncomeManagement, role: ['Administrator'] },
  { path: ROUTE_PATH.MESSAGE_MANAGEMENT, exact: false, component: MessageManagement, role: ['Administrator'] },
  { path: ROUTE_PATH.USER_REVIEW_MANAGEMENT, exact: false, component: UserReviewManagement, role: ['Administrator'] },
  { path: ROUTE_PATH.NOTIFICATION_MANAGEMENT, exact: false, component: NotificationManagement, role: ['Administrator'] },
  { path: ROUTE_PATH.SERVICE_SUPPLIER_MANAGEMENT, exact: false, component: ServiceSupplierManagement, role: ['Administrator'] },

  { path: ROUTE_PATH.ABOUT, exact: true, component: About, role: ['Viewer','Administrator'] },
  { path: ROUTE_PATH.FIND_SERVICE, exact: false, component: FindService, role: ['Viewer','Administrator']},
  { path: ROUTE_PATH.RESET_PASSWORD, exact: false, component: ResetPassword, role: ['ServiceSupplier','Administrator'] },

  { path: ROUTE_PATH.FAQ, exact: false, component: Faq, role: ['Viewer', 'Administrator','ServiceSupplier'] },
  { path: ROUTE_PATH.LOGIN, exact: true, component: Login , role: ['Viewer', 'Administrator','ServiceSupplier'] },
  { path: ROUTE_PATH.REGISTER, exact: true, component: Register, role: ['Viewer','ServiceSupplier'] },
  { path: ROUTE_PATH.CONTACT, exact: true, component: Contact, role: ['Viewer','Administrator','ServiceSupplier'] },
  { path: ROUTE_PATH.FIND_SERVICE + '/:category', exact: false, component: FindService, role: ['Viewer','Administrator','ServiceSupplier'] },
  { path: ROUTE_PATH.TERMS_AND_CONDITIONS, exact: false, component: TermsAndConditions, role: ['Viewer','Administrator','ServiceSupplier'] },
  { path: ROUTE_PATH.SERVICE_SUPPLIER_OVERVIEW + "/:id", exact: false, component: ServiceSupplierOverView, role: ['Viewer','Administrator', 'serviceSupplier'] },
  { path: ROUTE_PATH.HOME, exact: false, component: Home, role: ['Viewer','Administrator','ServiceSupplier'] },
  { path: ROUTE_PATH.PAGE_NOT_FOUND, exact: false, component: Page404, role: ['Viewer','Administrator','ServiceSupplier'] }
];
