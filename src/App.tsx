import React, {Suspense} from 'react';
import './App.scss';
import {routes} from "./routes/routes";
import {BrowserRouter} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Route, Routes} from "react-router";

function App() {
  const routeList = routes.map((route: any, index) => {
    return (route.component) ? (
        <Route key={index+ '-page'}path={route.path} element={<route.component/>}
              />
    ) : null;
  });

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
    </div>
  );
}

export default App;
