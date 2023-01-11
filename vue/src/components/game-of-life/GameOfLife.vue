<template>
  <div>
    <h1>
      Welcome to the
      <a
        href="https://codingdojo.org/kata/GameOfLife/"
        target="_blank"
        rel="noopener"
        >Game of Life</a
      >
    </h1>
    <div>
      <span># of Rows:</span
      ><input
        type="number"
        v-model.number="numRows"
        @change="generateEmptyGrid"
      />
      <span># of Columns:</span
      ><input
        type="number"
        v-model.number="numCols"
        @change="generateEmptyGrid"
      />
    </div>
    <div class="center">
      <span>Toggle starting cells and press play:</span>
      <img
        alt="Vue logo"
        src="../../assets/logo.png"
        @click="nextGenerationGrid"
      />
    </div>
    <div v-for="(row, $rowIndex) in grid" :key="$rowIndex">
      <span v-for="(col, $colIndex) in row" :key="$colIndex"
        ><button v-if="col.alive" @click="toggleCell(col.id)">
          *</button
        ><button v-else @click="toggleCell(col.id)">
          .
        </button></span
      >
    </div>
  </div>
</template>

<script src="./GameOfLife.component.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }
  img {
    max-width: 3%;
    height: auto;
    transition: transform 0.7s ease-in-out;
  }
  img:hover {
    transform: rotate(-90deg);
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
