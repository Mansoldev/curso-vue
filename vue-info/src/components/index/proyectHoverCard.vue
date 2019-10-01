<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="500"
        max-height="500"
      >
        <v-img :src="cardInfo.imagen"></v-img>

        <v-fade-transition>
          <router-link :to="cardInfo.page">
            <v-overlay
              v-if="hover"
              absolute
              color="#036358"
            >
              <v-btn color="#41b883">{{ cardInfo.titulo }}</v-btn>
            </v-overlay>
          </router-link>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    props: {
      cardInfo: Object
    },
    data () {
      return {
        overlay: false
      }
    }
  }
</script>
