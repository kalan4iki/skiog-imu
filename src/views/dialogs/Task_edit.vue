<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on">
            <v-list-item-title>Редактировать</v-list-item-title>
        </v-list-item>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Редактирование задачи № {{ task.pk }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Сохранить
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
            <v-subheader>Базовые настройки</v-subheader>
            <v-row>
              <v-form>
                <v-col
                    cols="12"
                    sm="6"
                    md="12"
                >
                  <v-text-field
                      v-model="task.address"
                      label="Адрес"
                      readonly
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="12"
                >
                  <v-textarea
                      v-model="task.text"
                      label="Описание"
                      readonly
                  ></v-textarea>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="12"
                >
                  <v-text-field
                    v-model="task.temp"
                    label="Тематика"
                    readonly
                  ></v-text-field>
                </v-col>
              </v-form>
            </v-row>
        </v-list>
      </v-card>
    </v-dialog>
</template>

<script>
export default({
    name: 'Task_edit',
    props: ['task'],
    data () {
        return {
            dialog: false,
        }
    },
    methods: {
        test: function () {
            console.log(this.task)
        }
    },
})
</script>
