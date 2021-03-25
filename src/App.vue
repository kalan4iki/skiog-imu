<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12"
                    sm="6"
                    md="2">
            <v-card>
              <v-card-text>
                <v-navigation-drawer permanent>
                <v-list nav dense>
                  <v-divider/>
                  <router-link to='/'>
                    <v-list-item link>
                      <v-list-item-content>
                        <v-list-item-title>Главная</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </router-link>
                  <v-divider/>
                  <router-link to='/archive'>
                    <v-list-item link>
                      <v-list-item-content>
                        <v-list-item-title>Архив</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </router-link>
                  <v-divider/>
                  <router-link to='/template'>
                    <v-list-item link>
                      <v-list-item-content>
                        <v-list-item-title>Шаблоны</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </router-link>
                  <v-divider/>
                  <router-link to='/task/1'>
                    <v-list-item link>
                      <v-list-item-content>
                        <v-list-item-title>Задача</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </router-link>
                  <v-divider/>
                </v-list>
                </v-navigation-drawer>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12"
                    sm="6"
                    md="10">
            <router-view/>
          </v-col>
        </v-row>
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
