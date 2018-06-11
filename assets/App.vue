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
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" ></v-toolbar-title>
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
          { icon: 'home', title: 'ЭТАЛОН', to: '/' },
          { icon: 'bubble_chart', title: 'Песок', to: '/pesok' },
          { icon: 'bubble_chart', title: 'Вывоз вторички', to: '/vyvoz' },
          { icon: 'bubble_chart', title: 'Аренда спецтехники', to: '/arenda' },
          { icon: 'bubble_chart', title: 'Гравий', to: '/gravy' },
          { icon: 'bubble_chart', title: 'Фотоальбом', to: '/photos' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ЭТАЛОН'
      }
    }
  }
</script>
