import React, { Fragment, useState } from "react";
// import { Routes, Route, Router } from 'react-router-dom';
import Support from "./pages/Support";
import Home from "./pages/Home";
import Default from "./layouts/Default";


const App = () => {
  const [home, setHome] = useState(true)
  const [support, setSupport] = useState(false)
  const [client, setClient] = useState(false)
  //Activation class navigation=====
  const [classNamehome, classNamesetHome] = useState('btn-tooltip active')
  const [classNamesupport, classNamesetSupport] = useState('btn-tooltip')
  const [classNameclient, classNamesetClient] = useState('btn-tooltip')
  const renderContent = () => {
    if (home) {
      return <Home />
    } else if (support) {
      return <Support />
    } else if (client) {
      return <h1>Client</h1>
    }
  }
  const handleDisplayHome = (e) => {
    e.preventDefault()
    setHome(true);
    setSupport(false);
    setClient(false);
    classNamesetHome('btn-tooltip active')
    classNamesetSupport('btn-tooltip ')
    classNamesetClient('btn-tooltip ')
    
  }
  const handleDisplaySupport = (e) => {
    e.preventDefault()
    setHome(false);
    setSupport(true);
    setClient(false);
    classNamesetHome('btn-tooltip ')
    classNamesetSupport('btn-tooltip active')
    classNamesetClient('btn-tooltip ')
  }
  const handleDisplayClient = (e) => {
    e.preventDefault()
    setHome(false);
    setSupport(false);
    setClient(true);
    classNamesetHome('btn-tooltip ')
    classNamesetSupport('btn-tooltip ')
    classNamesetClient('btn-tooltip active')
  }
  return (
    <>
      <div className="container-tab">
        <div className="app-navigation">
          <nav className="app-navigation__main">
            <ul>
              <li><button className={classNamehome} onClick={handleDisplayHome}>Projets</button></li>
              <li><button className={classNamesupport} onClick={handleDisplaySupport}>Supports</button></li>
              <li><button className={classNameclient} onClick={handleDisplayClient}>Client</button></li>
            </ul>
          </nav>
        </div>
        <div className="app-content">
          {renderContent()}
        </div>
      </div>
    </>
  )
}
export default App