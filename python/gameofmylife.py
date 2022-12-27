import numpy as np


def game_of_life(grid):
    rows, cols = grid.shape
    new_grid = np.zeros((rows, cols))

    for i in range(rows):
        for j in range(cols):
            # Conta o número de vizinhos vivos
            neighbors = (grid[i-1, j-1] + grid[i-1, j] + grid[i-1, j+1] +
                         grid[i, j-1] + grid[i, j+1] +
                         grid[i+1, j-1] + grid[i+1, j] + grid[i+1, j+1])

            # Aplica as regras do jogo
            if grid[i, j] == 1:
                if neighbors < 2 or neighbors > 3:
                    new_grid[i, j] = 0
                else:
                    new_grid[i, j] = 1
            else:
                if neighbors == 3:
                    new_grid[i, j] = 1

    return new_grid


# Cria a grade inicial com uma célula viva no centro
grid = np.zeros((5, 5))
grid[2, 2] = 1

# Imprime a grade inicial
print(grid)

# Calcula a próxima geração
new_grid = game_of_life(grid)

# Imprime a nova geração
print(new_grid)
