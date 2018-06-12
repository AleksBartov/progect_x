<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-card class="letters">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="material in materials"
              v-bind="{ [`xs${material.flex}`]: true }"
              :key="material.title"
            >
              <v-card class="secondary" v-ripple>
                <v-card-media
                  :src="material.src"
                  height="200px"
                >
                </v-card-media>
                <v-card-actions>
                  <span class="headline white--text" v-text="material.title"></span>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        materials: [
          { id: 'shebGran', title: 'Щебень гранитный', src: '/static/shebGran.jpg', flex: 12, to: '/' },
          { id: 'shebIzv', title: 'Щебень известняковый', src: '/static/shebIzv.jpg', flex: 6, to: '/pesok' },
          { id: 'otsevGran', title: 'Отсев гранитный', src: '/static/otsevGran.jpg', flex: 6, to: '/vyvoz' },
          { id: 'PGS', title: 'ПГС', src: '/static/PGS.jpeg', flex: 5, to: '/arenda' },
          { id: 'keramz', title: 'Керамзит', src: '/static/keramz.jpg', flex: 7, to: '/gravy' },
          { id: 'grunt', title: 'Грунт', src: '/static/grunt.jpg', flex: 6, to: '/photos' },
          { id: 'boyKirp', title: 'Бой кирпича', src: '/static/boyKirp.jpg', flex: 6, to: '/vyvoz' },
          { id: 'boyBet', title: 'Бой бетона', src: '/static/boyBet.jpg', flex: 12, to: '/arenda' },
          { id: 'vtorSheb', title: 'Вторичный щебень', src: '/static/vtorSheb.jpg', flex: 6, to: '/gravy' },
          { id: 'asfKrosh', title: 'Асфальтовая крошка', src: '/static/asfKrosh.jpg', flex: 6, to: '/photos' }
        ]
      }
    }
  }
</script>
