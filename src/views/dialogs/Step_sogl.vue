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
                  <v-text-field
                    v-model="result.text"
                    outlined
                    label="Описание"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="12"
                >
                  <v-select
                    v-model='result.res'
                    :items="res_items"
                    label="Результат"
                    item-value='pk'
                    item-text="name"
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
            @click="sogl"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Step_sogl',
  props: ['name', 'task', 'step'],
  data () {
      return {
          dialog: false,
          result: {text: '', res: []},
          res_items: [],
          template: []
      }
  },
  mounted() {
    let self = this;
    const params = new URLSearchParams();
    params.append('type', 'sogl');
    this.axios({url: 'step/results/', params: params}).then(function(response) {
        console.log(response)
        self.res_items = response['data']
    })
  },
  methods: {
    sogl: function () {
      let self = this;
      const params = new URLSearchParams();
      params.append('task_pk', self.task.pk);
      if (self.step) {
        params.append('step_pk', self.step.pk);
      }
      params.append('text', self.result['text']);
      params.append('result', self.result['res']);
      this.axios({url: 'task/action/sogl/', params: params}).then(function(response) {
        console.log(response)
        self.dialog = false
        self.$forceUpdate();
      })
    }
  }
}
</script>
