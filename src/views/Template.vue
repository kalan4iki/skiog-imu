<template>
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
</template>

<script lang="ts">
export default ({
    name: 'Template',
    data () {
        return {
            load: true,
            headers: [
                {
                    text: 'Номер шаблона',
                    align: 'start',
                    value: 'pk',
                },
                {
                    text: 'Название',
                    align: 'start',
                    value: 'text',
                },
            ],
            items: []
        }
    },
    mounted() {
        let self = this;
        this.axios({url: 'templates/'}).then(function(response) {
            console.log(response)
            self.load = false;
            self.items = response['data']
        })
    }
})
</script>
