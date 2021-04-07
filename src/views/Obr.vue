<template>
    <div>
        <v-row>
            <v-col>
                <v-btn @click="$router.go(-1)">Назад</v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="12">
                <v-card :loading="loadcard">
                    <v-card-title>
                        <v-row>
                            <v-col cols="12" sm="6" md="8">
                                Задача №<b>{{ task.pk }}</b> | Статус: <b>{{ task.stat }}</b>
                            </v-col>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="deep-purple accent-4"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                Действия
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item disabled>
                                    <v-list-item-title>Создать единный проект</v-list-item-title>
                                </v-list-item>
                                <Task_edit v-bind:task="task"> </Task_edit>
                                <v-list-item disabled>
                                    <v-list-item-title>Приостановить</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-tabs
                        v-model="tab"
                        background-color="transparent"
                        color="deep-purple accent-4"
                        grow
                        >
                        <v-tab>Описание</v-tab>
                        <v-tab>Этапы</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols='12' sm='6' md='12'>
                                          <v-alert
                                            border="bottom"
                                            colored-border
                                            color="deep-purple accent-4"
                                            elevation="2"
                                          >
                                            <v-row align="center">
                                              <v-col class="grow">
                                                Текущий этап:  <b>{{task.cur_step.name}}</b>
                                                <p>{{task.cur_step.text}}</p>
                                                <p>Ответсвенные: <b v-for="resp in task.cur_step.resp" :key="resp.pk">{{ resp.user_name }}</b><v-spacer/></p>
                                              </v-col>
                                              <v-col class="shrink">
                                                <v-btn dark v-on:click='tab += 1' color='deep-purple accent-4'>Просмотр</v-btn>
                                              </v-col>
                                            </v-row>
                                          </v-alert>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                            <v-form>
                                                <v-text-field
                                                    v-model="task.address"
                                                    label="Адрес"
                                                    readonly
                                                ></v-text-field>
                                            </v-form>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                            <v-form>
                                                <v-textarea
                                                    v-model="task.text"
                                                    label="Описание"
                                                    readonly
                                                    rows='2'
                                                ></v-textarea>
                                            </v-form>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                            <v-form>
                                                <v-text-field
                                                    v-model="task.temp"
                                                    label="Шаблон"
                                                    readonly
                                                ></v-text-field>
                                            </v-form>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card>
                                <v-card-text>
                                    <div class="d-flex justify-center mb-6">
                                    <b>Этапы рассмотрения</b>
                                </div>
                                <div v-if='task.steps.length == 0'>
                                  <v-alert
                                      dense
                                      border="left"
                                      type="warning"
                                      outlined
                                  >
                                      <v-row align="center">
                                          <v-col class="grow">
                                            <p>В данном шаблоне недоступны этапы.</p>
                                            <p>Необходимо исправить шаблон или заменить шаблон задачи.</p>
                                          </v-col>
                                          <v-col class="shrink">
                                              <Step_moder v-bind:name='"Определить"' v-bind:task="task" v-bind:step='null'> </Step_moder>
                                          </v-col>
                                      </v-row>
                                  </v-alert>
                                </div>
                                <div v-else-if='task.template'>
                                  <v-timeline dense>
                                      <v-timeline-item
                                          v-for="step in task.steps"
                                          :key="step.pk"
                                          fill-dot
                                      >
                                          <v-card class="elevation-2">
                                              <v-card-title class="title">
                                                  {{ step.name }}
                                              </v-card-title>
                                              <v-divider/>
                                              <v-card-text class="white text--primary" v-if="step.pk == task.cur_step.pk">
                                              <p>{{ step.text }}</p>
                                              </v-card-text>
                                              <v-divider/>
                                              <v-card-actions v-if="step.pk == task.cur_step.pk">
                                                  Ответсвенные: <b v-for="resp in step.resp" :key="resp.pk">{{ resp.user_name }}</b>
                                                  <v-spacer/>
                                                  <div v-if='step.types.text == "moder"'>
                                                    <Step_moder v-bind:name='step.types.name_but' v-bind:task="task" v-bind:step='step'> </Step_moder>
                                                  </div>
                                                  <div v-else-if='step.types.text == "sogl"'>
                                                    <Step_sogl v-bind:name='step.types.name_but' v-bind:task="task" v-bind:step='step'> </Step_sogl>
                                                  </div>
                                                  <div v-else-if='step.types.text == "execution"'>
                                                    <Step_exec v-bind:name='step.types.name_but' v-bind:task="task" v-bind:step='step'> </Step_exec>
                                                  </div>
                                              </v-card-actions>
                                          </v-card>
                                      </v-timeline-item>
                                  </v-timeline>
                                </div>
                                <div v-else>
                                    <v-alert
                                        dense
                                        border="left"
                                        type="warning"
                                        outlined
                                    >
                                        <v-row align="center">
                                            <v-col class="grow">
                                                Этапы недоступны.
                                                Шаблон не определен.
                                            </v-col>
                                            <v-col class="shrink">
                                                <Step_moder v-bind:name='"Определить"' v-bind:task="task" v-bind:step='null'> </Step_moder>
                                            </v-col>
                                        </v-row>
                                    </v-alert>
                                </div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                    <v-card-text>
                    </v-card-text>
                    <v-card-actions>
                      <v-row>
                        <v-col cols="12" sm="6" md="2">
                          <Task_photo v-bind:name='"Фотографии"' v-bind:task="task"> </Task_photo>
                        </v-col>
                        <v-col cols="12" sm="6" md="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="deep-purple accent-4"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                      Комментарии
                                    </v-btn>
                                </template>
                                <span>В разработке</span>
                            </v-tooltip>
                        </v-col>
                        <v-col cols="12" sm="6" md="2">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="deep-purple accent-4"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                      История
                                    </v-btn>
                                </template>
                                <span>В разработке</span>
                            </v-tooltip>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Task_edit from './dialogs/Task_edit.vue';
import Step_moder from './dialogs/Step_moder.vue';
import Step_sogl from './dialogs/Step_sogl.vue';
import Step_exec from './dialogs/Step_exec.vue';
import Task_photo from './dialogs/Task_photo.vue';

export default {
    components: { Task_edit, Step_moder, Step_sogl, Task_photo, Step_exec },
    name: 'Obr',
    data () {
        return {
            tab: null,
            loadcard: true,
            task: {
                'pk': null,
                'address': null,
                'text': null,
                'stat': null,
                'temp': null,
                'template': null,
                'steps': [],
                'cur_step': {'name': null}
            },

        }
    },
    mounted() {
        var pk = this.$route.params['id'];
        var url = 'tasks/' + pk;
        let self = this;
        this.axios({'url': url}).then(function(response) {
            self.task = response['data']
            self.loadcard = false;
        })
    },
    methods: {

    },
    computed: {

    }
}
</script>
