<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="2">
                <v-btn large> Add Branches</v-btn>
            </v-col>
            <v-divider inset vertical></v-divider>
            <v-col cols="12" lg="5">
                <v-text-field
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    single-line
                    outlined
                    label="Search by the branch location"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-divider class="ma-4 "></v-divider>
        <v-row>
            <v-col cols="12" lg="3">
                <v-card v-for="br in branchList" :key="br.id" class="ma-2" :class="activeMenu == br.id?'card-class-active':'card-class'" @click="_clickBranch(br)">
                    {{br.title}}
                </v-card>
            </v-col>
            <v-col cols="12" lg="9">
                <branchForm :branchData="branchList[activeMenu-1]"></branchForm>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import branchForm from './branchForm.vue'

export default {
    components:{
        branchForm
    },
    data(){
        return{
            branchList:[
                {id:1,title:"1",country:"anguila",city:"oran"},
                {id:2,title:"44",country:"Indonesia",city:"Jakarta"},
                {id:3,title:"114",country:"USA",city:"new york"},
            ],
            activeMenu:1,
        }
    },
    methods:{
        _clickBranch(br){
            this.activeMenu = br.id
        }
    }

}
</script>

<style>
.card-class{
    width: 200px;
    padding: 25px;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
}
.card-class-active{
    background-color: #c6c5c5;
    width: 200px;
    padding: 25px;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
}

</style>