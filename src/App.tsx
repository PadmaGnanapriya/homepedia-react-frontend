import React, {Suspense, useEffect} from 'react';
import './App.scss';
import {routes} from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router";
import {auth} from "./utils/firebase";
import {ToastContainer} from "react-toastify";

function App() {
  const routeList = routes.map((route: any, index) => {
    return (route.component) ? (
      <Route key={index + '-page'} path={route.path} element={<route.component/>}
      />
    ) : null;
  });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult()
          .then((idTokenResult) => {
            sessionStorage.setItem('userRole', idTokenResult.claims.role ? idTokenResult.claims.role : 'Viewer');
          });
      }
    });
  }, [auth])

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
