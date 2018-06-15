<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-24" v-if="reg">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Вход в личный кабинет</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="email" name="email" label="Электронная почта" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-btn flat small @click.stop="reg = !reg">Зарегистрироваться</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Войти</v-btn>
              </v-card-actions>
            </v-card>

            <v-card class="elevation-24" v-if="!reg">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person_outline" name="username" label="Псевдоним" type="text"></v-text-field>
                  <v-text-field prepend-icon="email" name="email" label="Электронная почта" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions >
                <v-btn flat small @click.stop="reg = !reg">уже зарегистрированы</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  export default {
    data () {
      return {
        reg: true
      }
    }
  }
</script>
