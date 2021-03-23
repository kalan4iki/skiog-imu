<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-app-bar class='d-flex align-center mb-6' app color='blue'>
          <v-row>
            <v-col class='pa-2' cols="12" sm="6" md="3">
              <router-link to='/'>
                <v-btn dense>
                  Главная
                </v-btn>
              </router-link>
            </v-col>
            <v-col class='pa-2' cols="12" sm="6" md="3">
              <router-link to='/archive'>
                <v-btn>
                  Архив
                </v-btn>
              </router-link>
            </v-col>
            <v-col class='pa-2' cols="12" sm="6" md="3">
              <router-link to='/task/1'>
                <v-btn>
                  Страница обращения
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
          <v-spacer/>
        </v-app-bar>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
