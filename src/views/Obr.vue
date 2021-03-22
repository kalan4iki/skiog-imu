<template>
    <div>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        <v-row>
                            <v-col>
                                Обращение №<b>DEV</b>
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
                                <v-list-item>
                                    <v-list-item-title>Редактировать</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="8"
                            >
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-form>
                                            <v-text-field
                                                v-model="obr.addres"
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
                                                v-model="obr.text"
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
                                                v-model="obr.cat"
                                                label="Тематика"
                                                readonly
                                            ></v-text-field>
                                        </v-form>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <div class="d-flex justify-center mb-6">
                                    <b>Этапы рассмотрения</b>
                                </div>
                                <v-timeline>
                                    <v-timeline-item>Dev 1</v-timeline-item>
                                    <v-timeline-item class="text-right">
                                    Dev 2
                                    </v-timeline-item>
                                    <v-timeline-item>Dev 3</v-timeline-item>
                                </v-timeline>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Obr',
    data () {
        return {
            obr: {
                'addres': 'dev',
                'text': 'dev',
                'cat': 'dev'
            }
        }
    }
}
</script>