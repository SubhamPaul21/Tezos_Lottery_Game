/* eslint-disable jsx-a11y/anchor-is-valid */
import Body from './components/Body';
import Rules from './components/Rules';
import ErrorPage from './ErrorPage';
import NavBar from './components/NavBar';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Body />} />
          <Route path="rules" element={<Rules />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
