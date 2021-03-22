<template>
    <div>
        <v-row>
            <v-col>
                <v-card elevation="2" :loading="load">
                    <v-card-text>
                        <v-data-table :headers="headers" :items="items" dense loading>
                            
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

            ],
            items: []
        }
    }
}    
</script>