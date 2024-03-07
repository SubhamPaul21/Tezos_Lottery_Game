/* eslint-disable jsx-a11y/anchor-is-valid */
import Body from './components/Body';
import Rules from './components/Rules';
import ErrorPage from './ErrorPage';
import NavBar from './components/NavBar';
import { TezosToolkit } from "@taquito/taquito";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";


function App() {
  const [Tezos, setTezos] = useState(new TezosToolkit("https://rpc.ghostnet.teztnets.com"));
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [beaconConnection, setBeaconConnection] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar beaconConnection={beaconConnection} setBeaconConnection={setBeaconConnection} userAddress={userAddress} setUserAddress={setUserAddress} userBalance={userBalance} setUserBalance={setUserBalance} />}>
          <Route index element={<Body beaconConnection={beaconConnection} setBeaconConnection={setBeaconConnection} userAddress={userAddress} setUserAddress={setUserAddress} userBalance={userBalance} setUserBalance={setUserBalance} />} />
          <Route path="rules" element={<Rules />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
