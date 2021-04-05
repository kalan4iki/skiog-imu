<template>
    <div>
        <v-row>
            <v-col>
                <v-card elevation="2" :loading="load">
                    <v-card-title>
                        <v-spacer/>
                        <Task_add/>
                    </v-card-title>
                    <v-card-text>
                        <v-data-table :headers="headers" :items="items" dense>
                            <template v-slot:item.pk="{ item }">
                                    <router-link :to='"/task/" + item.pk'>{{ item.pk }}</router-link>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Task_add from './dialogs/Task_add.vue';
export default {
    name: 'Main',
    components: { Task_add },
    data: () => ({
        load: true,
        headers: [
            {
                text: 'Номер задачи',
                align: 'start',
                value: 'pk',
            },
            {
                text: 'Описание',
                align: 'start',
                value: 'text',
            },
            {
                text: 'Адрес',
                align: 'start',
                value: 'address',
            },
            {
                text: 'Статус',
                align: 'start',
                value: 'stat',
            },
        ],
        items: []
    }),
    mounted() {
        let self = this;
        this.axios({url: 'tasks/'}).then(function(response) {
            console.log(response)
            self.load = false;
            self.items = response['data']
        })
    }
}
</script>
