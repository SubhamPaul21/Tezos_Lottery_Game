/* eslint-disable jsx-a11y/anchor-is-valid */
import Body from './components/Body';
import Rules from './components/Rules';
import ErrorPage from './ErrorPage';
import NavBar from './components/NavBar';
import { TezosToolkit } from "@taquito/taquito";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const RPC_URL = "https://rpc.ghostnet.teztnets.com";
  const NETWORK = "ghostnet";

  const [Tezos, setTezos] = useState(new TezosToolkit(RPC_URL));
  const [wallet, setWallet] = useState("");
  const [contract, setContract] = useState("");
  const [contractStorage, setContractStorage] = useState({});
  const [network, setNetwork] = useState(NETWORK);
  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [beaconConnection, setBeaconConnection] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar
          Tezos={Tezos}
          wallet={wallet}
          setWallet={setWallet}
          title="Tezos Lottery Game"
          setContract={setContract}
          setContractStorage={setContractStorage}
          network={network}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
          userBalance={userBalance}
          setUserBalance={setUserBalance}
          beaconConnection={beaconConnection}
          setBeaconConnection={setBeaconConnection} />}>
          <Route index element={<Body
            Tezos={Tezos}
            setWallet={setWallet}
            contract={contract}
            setContract={setContract}
            contractStorage={contractStorage}
            setContractStorage={setContractStorage}
            network={network}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            beaconConnection={beaconConnection}
            setBeaconConnection={setBeaconConnection} />} />
          <Route path="rules" element={<Rules />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
