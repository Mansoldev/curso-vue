<template>
  <v-layout row wrap class="vcenter">
    <v-flex xs12 md6 mt-3 px-2 v-for="(conf, index) in config.Categorias" :key="index">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <router-link :to="'/inicio/' + conf.id">
            <v-img :aspect-ratio="16/9" :src="conf.img">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out v-card--reveal display-3 grey darken-4 white--text text-xs-center"
                  style="height: 100%;"
                >
                  {{conf.titulo}}
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="py-1" style="position: relative;">
              <h1 class="text-xs-center black--text pr-5">{{conf.titulo}}</h1>
              <v-btn
                absolute
                :color="conf.color"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>{{conf.icono}}</v-icon>
              </v-btn>
            </v-card-text>
          </router-link>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      config: this.$bus.config
    }
  },
  created () {
    if (Object.entries(this.$bus.tiposModelos).length === 0) {
      this.$bus.API.getProductos()
        .then(data => {
          if (data.codigo == 0) this.$bus.tiposModelos = data
          else this.$bus.componentes.Toast.toastError(data.mensaje)
        })
    }
    if (this.$bus.user.codigosPostales.length === 0) {
      this.$bus.API.getCPs()
        .then(data => {
          if (data.codigo == 0) this.$bus.user.codigosPostales = data.codigosPostales
          else this.$bus.componentes.Toast.toastError(data.mensaje)
        })
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
