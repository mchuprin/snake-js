<template>
  <div ref="fieldRef" class="field"></div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue'

export default{
  setup() {

    const fieldRef = ref()
    const fieldSize = ref(20)
    const createField = () => {
      for (let row = 0; row < fieldSize.value; row++) {
        for (let col = 0; col < fieldSize.value; col++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          fieldRef.value.appendChild(cell);
        }
      }
    }

    onMounted(() => {
      if (fieldRef.value) {
        createField()
        gameLoop()

        document.addEventListener('keydown', (event) => {
          switch (event.key) {
            case 'ArrowUp':
              if (direction.value.y === 0) direction.value = { x: 0, y: -1 };
              break;
            case 'ArrowDown':
              if (direction.value.y === 0) direction.value = { x: 0, y: 1 };
              break;
            case 'ArrowLeft':
              if (direction.value.x === 0) direction.value = { x: -1, y: 0 };
              break;
            case 'ArrowRight':
              if (direction.value.x === 0) direction.value = { x: 1, y: 0 };
              break;
          }
        })
      }
    })
    const snake = ref([{ x: 10, y: 20}, { x: 9, y: 20} ])
    const food = ref({ x: 1, y: 16})
    const drawSnake = () => {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.classList.remove('snake')
        cell.classList.remove('snake__head')
      });

      snake.value.forEach((segment, index) => {
        const cellPosition = (segment.y * fieldSize.value - fieldSize.value) + segment.x;
        if (index > 0) {
          cells[cellPosition].classList.add('snake');
        } else {
          cells[cellPosition].classList.add('snake__head')
        }

      });
    }

    const drawFood = () => {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => cell.classList.remove('food'));

      const foodPosition = food.value.y * fieldSize.value - fieldSize.value + food.value.x;
      cells[foodPosition].classList.add('food');
    }

    const gameLoop = () => {
      updateSnake()
      drawSnake()
      drawFood()
    }
    const direction = ref({ x: 0, y: -1 });

    const updateSnake = () => {
      const head = { x: snake.value[0].x + direction.value.x, y: snake.value[0].y + direction.value.y };
      // console.log(head)

      // Проверка на столкновение с границами поля
      // if (head.x < 0 || head.x >= fieldSize.value || head.y < 0 || head.y >= fieldSize.value) {
      //   alert('Игра окончена!');
      //   // resetGame();
      //   return;
      // }

      // Проверка на столкновение с собой
      // if (snake.value.some(segment => segment.x === head.x && segment.y === head.y)) {
      //   alert('Игра окончена!');
      //   // resetGame();
      //   return;
      // }

      snake.value.unshift(head);

      // Проверка на съедание еды
      if (head.x === food.value.x && head.y === food.value.y) {
        // placeFood();
      } else {
        snake.value.pop();
      }
    }

    setInterval(() => {
      gameLoop()
    }, 500)

    return {
      fieldRef
    }
  }

}
</script>

<style lang="scss">
.field {
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(20, 20px);
  grid-template-rows: repeat(20, 20px);
}

.cell {
  width: 100%;
  height: 100%;
  background-color: vars.$filling;
}

.snake {
  background-color: #1d3c41;

  &__head {
    background-color: black;
  }
}

.food {
  background-color: red;
}
</style>
