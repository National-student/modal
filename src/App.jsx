import React from "react";
import "./App.css";
import { Modal } from "./components";
import { Link, Route, Routes, Outlet } from "react-router-dom";

function App() {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(true);
  };

  return (
    <div className="App">
      <button className="btn-primary btn" onClick={handleModal}>
        Create
      </button>

      <div style={{display:"flex", justifyContent:"center"}}>
      <h1 className="world">Hello</h1>
      <h1 className="hello">world</h1>
      </div>

      <article>Salom dunyo</article>

      <ul>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/valuta">Valuta</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<News />}>
          <Route index element={<>O`zbekistonda nima gap!!!</>} />
          <Route path="world" element={<>Jahonda nima gap!!!</>} />
        </Route>
        <Route path="weather" element={<Weather />}>
          <Route index element={<>Andijonda dim havo bo`latta</>} />
          <Route path="bu" element={<>Buxorod ibi tinch</>} />
          <Route path="na" element={<>Oxobobo yaxshi</>} />
        </Route>

        <Route path="/valuta" element={<Valuta />}>
            <Route index element={<>1$ = 12380 so'm</>} />
            <Route path="euro" element={<>1 Еuro = 14950 so'm</>} />
            <Route path="rubl" element={<>1 Rubl = 190 so'm</>} />
        </Route>

      </Routes>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

function News() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">O`zbekiston</Link>
        </li>
        <li>
          <Link to="/world">Jahon</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

function Weather() {
  return (
    <>
      <ul>
        <li>
          <Link to="/weather">Andijon</Link>
        </li>
        <li>
          <Link to="/weather/bu">Buxoro</Link>
        </li>

        <li>
          <Link to="/weather/na">Namangan</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

function Valuta() {
  return (
    <>
    <ul>
      <li>
        <Link to="/valuta">USD</Link>
      </li>
      <li>
        <Link to="/valuta/euro">EURO</Link>
      </li>
      <li>
        <Link to="/valuta/rubl">Rubl</Link>
      </li>
    </ul>
    <Outlet />
    </>
  )
}

export default App;
