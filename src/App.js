import React, { Fragment } from "react";
import Header from "./components/Header";
import ListaEventos from "./components/ListaEventos";
import Formulario from "./components/Formulario";
import CategoriasProvider from "./context/CategoriasContext";
import EventosProvider from "./context/EventosContext";

function App() {
  return (
    <Fragment>
      <EventosProvider>
        <CategoriasProvider>
          <Header titulo="Eventos con React con EventBrite API" />;
          <div className="uk-container">
            <Formulario />
            <ListaEventos />
          </div>
        </CategoriasProvider>
      </EventosProvider>
    </Fragment>
  );
}

export default App;
