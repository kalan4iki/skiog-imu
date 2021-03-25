<template>
    <div>
        <v-row>
            <v-col>
                <v-btn @click="$router.go(-1)">Назад</v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="12">
                <v-card>
                    <v-card-title>
                        <v-row>
                            <v-col>
                                Задача №<b>{{ task.pk }}</b> | Статус: <b>{{ task.stat }}</b>
                            </v-col>
                            <v-col>
                                <v-btn>
                                    Фотографии
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                Действия
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>Создать единный проект</v-list-item-title>
                                </v-list-item>
                                <Task_edit v-bind:task="task"> </Task_edit>
                                <v-list-item>
                                    <v-list-item-title>Приостановить</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-tabs
                        v-model="tab"
                        background-color="transparent"
                        color="basil"
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
                                                    label="Тематика"
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
                                <div v-if='task.template'>
                                    <v-timeline>
                                        <v-timeline-item
                                            v-for="step in task.steps"
                                            :key="step.pk"
                                            fill-dot
                                        >
                                            <v-card>
                                                <v-card-title class="title">
                                                    {{ step.name }}
                                                </v-card-title>
                                                <v-divider/>
                                                <v-card-text class="white text--primary">
                                                <p>{{ step.text }}</p>
                                                </v-card-text>
                                                <v-divider/>
                                                <v-card-actions>
                                                    Ответсвенные: <b v-for="resp in step.resp" :key="resp.pk">{{ resp.user_name }}</b>
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
                                                <v-btn color="warning">Определить</v-btn>
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
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Task_edit from './dialogs/Task_edit.vue';
export default {
    components: { Task_edit },
    name: 'Obr',
    data () {
        return {
            tab: null,
            task: {
                'pk': null,
                'address': null,
                'text': null,
                'stat': null,
                'temp': null,
                'template': null,
                'steps': [],
            },
        }
    },
    mounted() {
        var pk = this.$route.params['id'];
        var url = 'tasks/' + pk;
        let self = this;
        this.axios({'url': url}).then(function(response) {
            self.task = response['data']
        })
    }
}
</script>