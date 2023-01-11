export default {
  name: 'GameOfLife',
  data() {
    return {
      grid: [[false]],
      numRows: 4,
      numCols: 8,
    };
  },
  created() {
    this.generateEmptyGrid();
  },
  methods: {
    generateEmptyGrid() {
      const alive = false;
      let idCount = 0;
      this.grid = [];
      for (let rowNum = 0; rowNum < this.numRows; rowNum++) {
        let row = [];
        for (let colNum = 0; colNum < this.numCols; colNum++) {
          row.push({ id: idCount++, alive });
        }
        this.grid.push(row);
      }
    },
    toggleCell(cellId) {
      this.grid.forEach((row) =>
        row.forEach((col) => {
          if (col.id === cellId) {
            col.alive = !col.alive;
          }
        })
      );
    },
    nextGenerationGrid() {
      let idCount = 0;
      let nextGenerationGrid = [];
      for (let rowNum = 0; rowNum < this.numRows; rowNum++) {
        let row = [];
        for (let colNum = 0; colNum < this.numCols; colNum++) {
          row.push({
            id: idCount++,
            alive: this.checkNeighbors(rowNum, colNum),
          });
        }
        nextGenerationGrid.push(row);
      }
      this.grid = nextGenerationGrid;
    },
    checkNeighbors(rowNum, colNum) {
      const leftHorizontalNeighbor =
        rowNum === 0 ? 0 : +this.grid[rowNum - 1][colNum].alive;
      const rightHorizontalNeighbor =
        rowNum === this.numRows - 1 ? 0 : +this.grid[rowNum + 1][colNum].alive;
      const topVirticalNeighbor =
        colNum === 0 ? 0 : +this.grid[rowNum][colNum - 1].alive;
      const bottomVirticalNeighbor =
        colNum === this.numCols - 1 ? 0 : +this.grid[rowNum][colNum + 1].alive;
      const leftTopNeighbor =
        rowNum === 0 || colNum === 0
          ? 0
          : +this.grid[rowNum - 1][colNum - 1].alive;
      const rightTopNeighbor =
        rowNum === 0 || colNum === this.numCols - 1
          ? 0
          : +this.grid[rowNum - 1][colNum + 1].alive;
      const bottomLeftNeighbor =
        rowNum === this.numRows - 1 || colNum === 0
          ? 0
          : +this.grid[rowNum + 1][colNum - 1].alive;
      const bottomRightNeighbor =
        rowNum === this.numRows - 1 || colNum === this.numCols - 1
          ? 0
          : +this.grid[rowNum + 1][colNum + 1].alive;
      const numLiveNeighbors =
        leftHorizontalNeighbor +
        rightHorizontalNeighbor +
        topVirticalNeighbor +
        bottomVirticalNeighbor +
        leftTopNeighbor +
        rightTopNeighbor +
        bottomLeftNeighbor +
        bottomRightNeighbor;
      if (numLiveNeighbors > 3 || numLiveNeighbors < 2) {
        return false;
      } else if (numLiveNeighbors === 3) {
        return true;
      } else {
        return this.grid[rowNum][colNum].alive;
      }
    },
  },
};
