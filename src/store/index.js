import { createStore } from "vuex";
import juegos from "../juegos.json";

const store = createStore({
  state() {
    return {
      juegos: juegos,
    };
  },
  mutations: {
    aumentar(state, juego) {
      const juegoEncontrado = state.juegos.find(
        (j) => j.codigo === juego.codigo
      );
      juegoEncontrado.stock++;
    },
    disminuir(state, juego) {
      const juegoEncontrado = state.juegos.find(
        (j) => j.codigo === juego.codigo
      );
      juegoEncontrado.stock--;
    },
  },
  actions: {
    aumentarStock(context, juego) {
      context.commit("aumentar", juego);
    },
    disminuirStock(context, juego) {
      context.commit("disminuir", juego);
    },
  },
  
});
export default store;
