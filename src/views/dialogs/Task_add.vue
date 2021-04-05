<template>
  <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
            Создать
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Создание задачи</span>
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
                  <v-text-field
                    v-model='task.address'
                    label="Адрес"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model='task.text'
                    label="Описание"
                    required
                    rows='2'
                  ></v-textarea>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="12"
                >
                  <v-select
                    v-model='task.template'
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
            @click="save_task"
          >
            Создать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Task_add',
  data () {
      return {
          dialog: false,
          temp_items: [],
          task: {'address': '', 'text': '', 'template': []}
      }
  },
  mounted() {
    let self = this;
    this.axios({url: 'templates/'}).then(function(response) {
        console.log(response)
        self.temp_items = response['data']
    })
  },
  methods: {
    save_task: function () {
      console.log(this.task)
    }
  }
}
</script>
