import React, { Component } from "react";
import axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = "TVX3YDG2J7V62RYHMG2G";
  ordenar = "date";
  state = {
    eventos: []
  };

  obtenerEventos = async busqueda => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&token=${this.token}&locale=es_ES`;

    //Consultar la API con la URL

    const eventos = await axios(url);
    this.setState({
      eventos: eventos.data.events
    });
  };
  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
