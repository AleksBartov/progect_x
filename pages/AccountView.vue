<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md8>
            <v-card class="elevation-24" v-if="!reg">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person_outline" v-model="псевдоним" name="псевдоним" label="Псевдоним" type="text"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" v-model="email" label="Электронная почта" type="email"></v-text-field>
                  <v-text-field
                    v-model="пароль"
                    prepend-icon="lock"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    name="input-10-1"
                    label="Придумайте пароль"
                    hint="по крайней мере 5 символов"
                    min="5"
                    counter
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="sendingData">Ok</v-btn>
              </v-card-actions>
            </v-card>
            <v-snackbar
              :timeout="timeout"
              :color="color"
              top
              :multi-line="mode"
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
        e1: true,
        псевдоним: null,
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
        axios.post('/account', {
          псевдоним: this.псевдоним,
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
        this.snackbar = true
        return this.text, this.color;
      }
    }
  }
</script>
