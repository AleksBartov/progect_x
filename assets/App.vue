<template>
  <v-app dark class="primary">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app class="secondary"
    >
      <v-list >
        <v-list-tile 
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" ></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar fixed >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-toolbar fixed app :clipped-left="clipped" class="secondary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      
      <v-toolbar-title v-text="title" ></v-toolbar-title>
      <v-spacer></v-spacer>
      <img src="static/logo.svg" alt="Vuetify.js" height="50">
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>главная</v-btn>
        <v-menu transition="scale-transition" origin="center center" open-on-hover>
          <v-btn slot="activator" dark color="secondary">материалы</v-btn>
          <v-list >
            <v-list-tile 
              router
              :to="material.to"
              :key="i"
              v-for="(material, i) in materials"
              exact
            >
              <v-list-tile-content>
                <v-list-tile-title v-text="material.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat>услуги</v-btn>
        <v-btn flat>прайс-лист</v-btn>
        <v-btn flat>напишите нам</v-btn>
        <v-btn flat>наш адрес</v-btn>
        <v-btn flat>фотогалерея</v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <v-content>
      <v-container>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    
    <v-footer :fixed="fixed" app class="secondary">
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'главная', to: '/' },
          { icon: 'bubble_chart', title: 'материалы', to: '/pesok' },
          { icon: 'bubble_chart', title: 'услуги', to: '/vyvoz' },
          { icon: 'bubble_chart', title: 'прайс-лист', to: '/arenda' },
          { icon: 'bubble_chart', title: 'напишите нам', to: '/gravy' },
          { icon: 'bubble_chart', title: 'наш адрес', to: '/photos' },
          { icon: 'bubble_chart', title: 'фотогалерея', to: '/photos' }
        ],
        materials: [
          { title: 'Щебень гранитный', to: '/' },
          { title: 'Щебень известняковый', to: '/pesok' },
          { title: 'Отсев гранитный', to: '/vyvoz' },
          { title: 'ПГС', to: '/arenda' },
          { title: 'Керамзит', to: '/gravy' },
          { title: 'Грунт', to: '/photos' },
          { title: 'Бой кирпича', to: '/vyvoz' },
          { title: 'Бой бетона', to: '/arenda' },
          { title: 'Вторичный щебень', to: '/gravy' },
          { title: 'Асфальтовая крошка', to: '/photos' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ЭТАЛОН'
      }
    }
  }
</script>
