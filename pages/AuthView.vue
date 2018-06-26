<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md8>
            <v-card class="elevation-24">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Вход в личный кабинет</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="email" v-model="email" name="email" label="Электронная почта" type="email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="пароль" name="пароль" label="Пароль" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="sendingData">Войти</v-btn>
              </v-card-actions>
            </v-card>
            <v-snackbar
              :timeout="timeout"
              :color="color"
              :multi-line="mode"
              top
              v-model="snackbar"
            >
              {{ text }}
              <v-btn dark flat @click.native="snackbar = false">закрыть</v-btn>
            </v-snackbar>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        email: null,
        пароль: null,
        snackbar: false,
        color: null,
        mode: 'multi-line',
        timeout: 5000,
        text: null
      }
    },
    methods: {
      sendingData () {
        axios.post('/auth', {
          email: this.email,
          пароль: this.пароль
        })
        .then(response => {
          this.text = response.data;
          this.color = 'success';
        })
        .catch(error => {
          this.text = error.response.data;
          this.color = 'error';
        });
        this.snackbar = true;
        return this.text, this.color;        
      }
    }
  }
</script>
