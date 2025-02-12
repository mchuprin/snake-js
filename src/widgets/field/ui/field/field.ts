import {computed, defineComponent, onMounted, reactive, Ref, ref, watch} from 'vue'
import {DirectionRuleI} from "@/widgets/field/interfaces/direction-rule.interface";

export default defineComponent({
  name: 'field',
  setup () {
    const field = ref(null)
    const fieldSize = reactive({ width: 500, height: 400 })
    const snakeHeadCoordinates = reactive({ x: 100, y: 80 })
    const direction = ref(39)
    const snakeSize = ref(20)
    const snakeCoordinates: Ref<{ x: number; y: number }[]> = ref([])
    const snakeLength = ref(5)
    const isSnakeMoving = ref()

    const gameEnd = computed(
      () =>
        snakeHeadCoordinates.x < 0 ||
        snakeHeadCoordinates.x > fieldSize.width ||
        snakeHeadCoordinates.y < 0 ||
        snakeHeadCoordinates.y > fieldSize.height
    )

    watch(gameEnd, (value) => {
      if (value) clearInterval(isSnakeMoving.value)
    })

    const drawSnake = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const ctx = field.value.getContext('2d')
      ctx.fillStyle = '#1d3c41'
      ctx.fillRect(
        snakeHeadCoordinates.x,
        snakeHeadCoordinates.y,
        snakeSize.value,
        snakeSize.value
      )
      snakeCoordinates.value.push({
        x: snakeHeadCoordinates.x,
        y: snakeHeadCoordinates.y
      })
    }

    const drawField = ({ x, y }: { x: number; y: number }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const ctx: CanvasRenderingContext2D = field.value.getContext('2d')
      ctx.fillStyle = '#94bd91'
      ctx.fillRect(x, y, snakeSize.value, snakeSize.value)
    }

    onMounted(() => {
      drawField(snakeCoordinates.value[0])
    })

    const restart = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const ctx: CanvasRenderingContext2D = field.value.getContext('2d')
      ctx.fillStyle = '#94bd91'
      ctx.fillRect(0, 0, fieldSize.width, fieldSize.height)
      snakeCoordinates.value = []
      // TODO: сделать начальные координаты случайными с шагом в 20
      snakeHeadCoordinates.x = 100
      snakeHeadCoordinates.y = 80
      snakeLength.value = 2
      isSnakeMoving.value = setInterval(moveSnake, 300)
    }

    const moveSnake = () => {
      switch (direction.value) {
        case 37:
          snakeHeadCoordinates.x -= snakeSize.value
          break
        case 38:
          snakeHeadCoordinates.y -= snakeSize.value
          break
        case 39:
          snakeHeadCoordinates.x += snakeSize.value
          break
        case 40:
          snakeHeadCoordinates.y += snakeSize.value
          break
      }
      drawSnake()
    }

    watch(isSnakeMoving, () => {
      setInterval(moveSnake, 1000)
    })

    const changeDirection = (newDirection: number) => {
      const directionsRules: DirectionRuleI[] = [
        { direction: 37, forbidden: 39 },
        { direction: 38, forbidden: 40 },
        { direction: 39, forbidden: 37 },
        { direction: 40, forbidden: 38 }
      ]

      const actualRule: DirectionRuleI | undefined = directionsRules.find(
        (dir) => dir.direction === direction.value
      )

      if (actualRule && actualRule.forbidden !== newDirection) { direction.value = newDirection }
    }

    return {
      field,
      fieldSize,
      snakeHeadCoordinates,
      direction,
      snakeSize,
      snakeCoordinates,
      snakeLength,
      isSnakeMoving,
      gameEnd,
      restart,
      drawSnake,
      changeDirection,
      drawField
    }
  }

})
