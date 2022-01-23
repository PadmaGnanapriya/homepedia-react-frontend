import React, {Suspense, useEffect, useState} from 'react';
import './App.scss';
import {routes} from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router";
import {auth} from "./utils/firebase";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API } from './store/api/REST_API';
import {useDispatch, useSelector} from "react-redux";
import {loggedRole, resetRole} from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const userRole = useSelector(loggedRole);
  const [geoPosition, setGeoPosition] = useState({latitude: null, longitude: null});
  const routeList = routes.map((route: any, index) => {
    return (route.component && route.role.includes(userRole)) ? (
      <Route key={index + '-page'} path={route.path} element={<route.component/>}
      />
    ) : null;
  });

  useEffect(() => {
   dispatch(resetRole());
  }, [auth])

  useEffect(() => {
    const deviceData = sessionStorage.getItem('deviceData');
    const firstVisit = localStorage.getItem('firstVisit');
    if(deviceData === null) { // limit to sent one time as browser on. not resend again and again on reload
      const setPosition =(position:any) => {
        setGeoPosition({latitude:position.coords.latitude, longitude: position.coords.longitude})
      }
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(setPosition);
      }
      const deviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    };
      const visitorData = {
        isNewDevice: firstVisit === null, 
        firstDate: firstVisit === null ? new Date(): new Date(firstVisit), 
        latitude: geoPosition.latitude, 
        longitude: geoPosition.longitude, 
        deviceType:deviceType(),
        platform: window.navigator.platform, 
        appVersion:window.navigator.appVersion, 
      }
      API.POST('visitor-data',  visitorData) 
      sessionStorage.setItem("deviceData", new Date().toDateString());
    }
    if(firstVisit === null){
      localStorage.setItem("firstVisit", new Date().toDateString());
    }
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Suspense fallback={<div/>}>
          <main>
            <div className='client-wrapper'>
              <Routes>
                {routeList}
              </Routes>
            </div>
          </main>
          <Footer/>
        </Suspense>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={5000}/>
    </div>
  );
}

export default App;
