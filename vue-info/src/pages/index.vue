<template>
  <div class="home">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6" v-for="cardInfo in cardsInfo" :key="cardInfo.titulo">
          <hover-card :cardInfo="cardInfo"></hover-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import hoverCard from '@/components/index/proyectHoverCard'

export default {
  name: 'home',
  components: {
    hoverCard
  },
  data () {
    return {
      cardsInfo: [
        {
          imagen: require('@/assets/img/vueFront.jpg'),
          titulo: 'Proyecto Vue moderno',
          page: '/modern'
        },
        {
          imagen: require('@/assets/img/vueLegacy.jpg'),
          titulo: 'Proyecto legacy con vue',
          page: '/legacy'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    .container {
      height: 100%;
      .row {
        height: 100%;
      }
    }
  }
</style>
