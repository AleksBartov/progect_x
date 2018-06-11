<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>
    <v-card v-if="drawer">
    <v-flex xs12>
      <v-carousel >
        <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" ></v-carousel-item>
      </v-carousel>
    </v-flex>  
    </v-card>
      <v-card>
        <v-toolbar flat>
          <v-toolbar-title>Фотоальбом</v-toolbar-title>
        </v-toolbar>
        <v-subheader>Наши машины</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4 >
              <img src="/static/tracks.jpg" class="image" alt="lorem" width="100%" height="100%" @click="drawer = !drawer">
            </v-flex>
          </v-layout>
        </v-container>

        <v-subheader>Наши сотрудники</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-5"></v-footer>
      </v-card>
      
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          {
            src: '/static/tracks.jpg'
          },
          {
            src: '/static/tracks.jpg'
          },
          {
            src: '/static/tracks.jpg'
          },
          {
            src: '/static/tracks.jpg'
          }
        ]
      }
    }
  }
</script>
