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
          <span class="headline">Модерация</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-on:submit='moderation'>
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
            @click="moderation"
          >
            Модерировать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Step_moder',
  props: ['name', 'task', 'step'],
  data () {
      return {
          dialog: false,
          temp_items: [],
          template: []
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
    moderation: function () {
      let self = this;
      const params = new URLSearchParams();
      params.append('task_pk', self.task.pk);
      if (self.step) {
        params.append('step_pk', self.step.pk);
      }
      params.append('template', self.template);
      this.axios({url: 'task/action/moderation/', params: params}).then(function(response) {
        console.log(response)
        self.dialog = false
        self.$forceUpdate();
      })
    }
  }
}
</script>
