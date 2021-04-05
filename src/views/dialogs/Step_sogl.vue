<template>
  <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
            {{name}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Согласование</span>
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
                  <v-select
                    v-model='template'
                    :items="temp_items"
                    label="Шаблон"
                    item-value='pk'
                    required
                  ></v-select>
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
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Согласовать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Step_sogl',
  props: ['name', 'task'],
  data () {
      return {
          dialog: false,
          temp_items: [],
          template: []
      }
  },
}
</script>
