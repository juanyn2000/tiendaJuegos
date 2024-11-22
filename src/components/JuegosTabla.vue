<template>
  <table>
    <thead>
      <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="juego in juegos" :key="juego.codigo">
        <td>{{ juego.codigo }}</td>
        <td>{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>{{ juego.precio }}</td>
        <td>
          <button @click="disminuirStock(juego)">-</button>
          <button @click="aumentarStock(juego)">+</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "JuegosTabla",
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["disminuirStock", "aumentarStock"]),
  },
};
</script>

<style scoped>
table {
  width: 100%;
  
  margin: 20px 0;
  font-size: 18px;
  color: black;
  text-align: left;
  background-color: #f9f9f9;
}

thead {
  background-color: #4CAF50;
  color: white;
}

thead th {
  padding: 12px;
  text-transform: uppercase;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #e8f5e9;
  cursor: pointer;
}

tbody td {
  padding: 10px;
}

button {
  padding: 6px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  background-color: #4CAF50;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:active {
  transform: scale(0.95);
}




</style>
