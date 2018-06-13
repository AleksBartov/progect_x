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
          ripple
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
        <v-btn flat router :to="items[0].to">главная</v-btn>
        <v-menu transition="slide-x-transition" open-on-hover>
          <v-btn slot="activator" dark color="secondary" router :to="items[1].to">материалы</v-btn>
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

        <v-btn flat router :to="items[2].to">прайс-лист</v-btn>

        <v-menu transition="slide-x-reverse-transition" open-on-hover >
          <v-btn slot="activator" dark color="secondary" router :to="items[3].to">услуги</v-btn>
          <v-list >
            <v-list-tile 
              router
              :to="material.to"
              :key="i"
              v-for="(material, i) in services"
              exact
            >
              <v-list-tile-content>
                <v-list-tile-title v-text="material.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

        
        <v-btn flat router :to="items[4].to">личный кабинет</v-btn>
        <v-btn flat router :to="items[5].to">контакты</v-btn>
        <v-btn flat router :to="items[6].to">фотогалерея</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout v-scroll="onScroll" column align-center justify-center>
      <v-btn
                v-if="offsetTop > 300"
                transition="scale-transition" origin="center center"
                color="pink"
                dark
                fixed
                bottom
                right
                fab
              >
                <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-layout>

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
        offsetTop: 0,
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'главная', to: '/' },
          { icon: 'category', title: 'материалы', to: '/pesok' },
          { icon: 'receipt', title: 'прайс-лист', to: '/arenda' },
          { icon: 'build', title: 'услуги', to: '/vyvoz' },
          { icon: 'account_circle', title: 'личный кабинет', to: '/gravy' },
          { icon: 'local_phone', title: 'контакты', to: '/address' },
          { icon: 'photo_album', title: 'фотогалерея', to: '/photos' }
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
        services: [
          { title: 'Аренда техники', to: '/' },
          { title: 'Доставка сыпучих материалов', to: '/pesok' },
          { title: 'Перевозка самосвалами', to: '/vyvoz' },
          { title: 'Рытье котлованов', to: '/arenda' },
          { title: 'Отсыпка участка', to: '/gravy' },
          { title: 'Вывоз грунта ', to: '/photos' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ЭТАЛОН'
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    }
  }
</script>
