<template>
    <div>
        <v-row>
            <v-col>
                <v-card elevation="2" :loading="load">
                    <v-card-text>
                        <v-data-table :headers="headers" :items="items" dense>
                            
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: 'Main',
    data () {
        return {
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
            ],
            items: []
        }
    },
    mounted: function () {
        this.axios({url: 'tasks/'}).then(function(response) {
            this.load = false;
            console.log(response)
        })
    }
}    
</script>