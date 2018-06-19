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
      <v-divider></v-divider>
      <v-btn color="primary" v-for="item in links" :key="item" router :to="item.to">Регистрация</v-btn>
      <v-btn color="primary" v-for="item in auths" :key="item" router :to="item.to">Вход</v-btn>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped" class="primary" v-resize="onResize">

    <v-tabs
        slot="extension"
        color="secondary"
        grow
        v-if="windowSize.x < 816"
      >
      <v-toolbar-side-icon 
              @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>  
    </v-tabs>

      <img src="static/logo.svg" alt="Vuetify.js" height="60">
      <v-spacer></v-spacer>
      <v-btn color="primary" v-if="windowSize.x > 816" v-for="item in links" :key="item" router :to="item.to">Регистрация</v-btn>
      <v-btn color="secondary" v-if="windowSize.x > 816" v-for="item in auths" :key="item" router :to="item.to">Вход</v-btn>
      

      <v-tabs
        slot="extension"
        v-model="tab"
        color="secondary"
        grow
        v-if="windowSize.x > 816"
      >
        <v-tabs-slider color="letters"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item" router :to="item.to">
          {{ item.title }}
        </v-tab>
      </v-tabs>

    </v-toolbar>

    <v-content>
      <v-container>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-layout v-scroll="onScroll">
      <v-btn
                v-if="offsetTop > 300"
                color="almgray"
                fixed
                bottom
                right
                fab
                @click="$vuetify.goTo(target, options)"
               >
                <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-layout>
    
    <v-footer :fixed="fixed" app class="secondary">
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'
  import * as easings from 'vuetify/es5/util/easing-patterns'

  export default {
    mixins: [Meta],

    data () {
      return {
        windowSize: {
          x: 0,
          y: 0
        },
        type: 'number',
        number: 0,
        duration: 700,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),

        offsetTop: 0,
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Главная', to: '/' },
          { icon: 'category', title: 'Материалы', to: '/materials' },
          { icon: 'receipt', title: 'Прайс-лист', to: '/price_list' },
          { icon: 'build', title: 'Услуги', to: '/services' },
          { icon: 'local_phone', title: 'Контакты', to: '/address' },
          { icon: 'photo_album', title: 'Фотогалерея', to: '/photos' }
        ],
        links: [
          { icon: 'home', to: '/account' }
        ],
        auths: [
          { icon: 'home', to: '/auth' }
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
    mounted () {
      this.onResize()
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      },
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        if (this.windowSize.x > 816) {
          this.drawer = false
        }
      }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing
        }
      }
    }
  }
</script>
