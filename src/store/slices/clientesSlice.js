import { createSlice } from "@reduxjs/toolkit";
import ClienteList from "../../data/ClienteList";
const initialList = new ClienteList();
export const clientesSlice = createSlice({
  name: "clientes",
  initialState: {
    lista: initialList,
    refresh: false,
  },
  reducers: {
    registrarTransaccion: (state, action) => {
      const { nombre, tipo, texto } = action.payload;
      let cliente = state.lista.findCliente(nombre);
      if (!cliente) cliente = state.lista.addCliente(nombre);
      if (tipo === "consulta") cliente.consultas.enqueue(texto);
      else cliente.reclamos.push(texto);
      state.refresh = !state.refresh;
    },
  },
});
export const { registrarTransaccion } = clientesSlice.actions;
export default clientesSlice.reducer;