<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-card class="letters">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="material in services"
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
        services: [
          { title: 'Аренда техники', src: '/static/arendaTekh.jpg', flex: 12, to: '/' },
          { title: 'Доставка сыпучих материалов', src: '/static/dostavkaSyp.jpg', flex: 12, to: '/pesok' },
          { title: 'Перевозка самосвалами', src: '/static/perevozkaSamosvalami.jpg', flex: 12, to: '/vyvoz' },
          { title: 'Рытье котлованов', src: '/static/ryteKotlovanov.jpg', flex: 12, to: '/arenda' },
          { title: 'Отсыпка участка', src: '/static/otsypkaUchastka.jpg', flex: 12, to: '/gravy' },
          { title: 'Вывоз грунта ', src: '/static/vyvozGrunta.jpg', flex: 12, to: '/photos' }
        ]
      }
    }
  }
</script>
