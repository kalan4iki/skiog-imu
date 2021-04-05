<template>
  <v-dialog
      v-model="dialog"
      max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="deep-purple accent-4" dark v-bind="attrs" v-on="on">
          {{name}}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Изображения по задачи</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-carousel>
                  <v-carousel-item
                    v-for="(item,i) in images"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Закрыть
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Task_photo',
  props: ['name', 'task'],
  data () {
      return {
          dialog: false,
          temp_items: [],
          template: [],
          images: []
      }
  },
}
</script>

<style lang="css" scoped>
</style>
