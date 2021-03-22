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
    name: 'Archive',
    data () {
        return {
            load: true,
            headers: [
                {
                    text: 'Номер обращения',
                    align: 'start',
                    value: 'nomdobr',
                },
                {
                    text: 'Категория',
                    align: 'start',
                    value: 'cat',
                },
                {
                    text: 'Модератор',
                    align: 'start',
                    value: 'moder',
                },
                {
                    text: 'Номер обращения',
                    align: 'start',
                    value: 'nomdobr',
                },
            ],
            items: []
        }
    }
}
</script>