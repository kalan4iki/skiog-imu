<template>
  <v-app>
    <v-app-bar class='d-flex align-center mb-6' app color='blue'>
      <div class='pa-2'>
        <router-link to='/'>
          <v-btn dense>
            Главная
          </v-btn>
        </router-link>
      </div>
      <div class='pa-2'>
        <router-link to='/archive'>
          <v-btn>
            Архив
          </v-btn>
        </router-link>
      </div>
      <div class='pa-2'>
        <router-link to='/obr'>
          <v-btn>
            Страница обращения
          </v-btn>
        </router-link>
      </div>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
</style>
