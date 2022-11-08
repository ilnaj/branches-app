<template>
<v-container class="container-color">
    <v-row>
        <v-col cols="12" lg="3" class="ma-0 pa-0">
            <div v-for="mn in menuList" :key="mn.no" :class="activeMenu == mn.no?'sub-menu-active':'sub-menu'" @click="_clickSubMenu(mn)">
                {{mn.label}}
            </div>
        </v-col>
        <v-col cols="12" lg="9"  class="ma-0 pa-0">
            <div class="content-menu" v-if="activeMenu==1">
                <div>
                    Branch Details
                    <label class="edit-right"><v-btn class="btn-more">...</v-btn>Edit</label>
                </div>
                
                <v-row  class="mt-5">
                    <v-col cols="12" lg="12">
                        <div style="color: grey;">Branch ID:</div>
                        <div>{{branchData.id}}</div>
                    </v-col>
                    <v-col cols="12" lg="12">
                        <div style="color: grey;">Country:</div>
                        <div>{{branchData.country}}</div>
                    </v-col>
                    <v-col cols="12" lg="12">
                        <div style="color: grey;">City:</div>
                        <div>{{branchData.city}}</div>
                    </v-col>
                </v-row>
            </div>
            <div class="content-menu" v-if="activeMenu==2">
                Branch Staff
            </div>
            <div class="content-menu" v-if="activeMenu==3">
                Branch Services
            </div>
            <div class="content-menu" v-if="activeMenu==4">
                Branch Products
            </div>
            <div class="content-menu" v-if="activeMenu==5">
                Branch Packages
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    props:{
        branchData:{
            default:()=>({})
        }
    },
    data(){
        return{
            menuList:[
                {no:1,label:"Details"},
                {no:2,label:"Staff"},
                {no:3,label:"Services"},
                {no:4,label:"Products"},
                {no:5,label:"Packages"},
            ],
            activeMenu:1,
        }
    },
    methods:{
        _clickSubMenu(mn){
            this.activeMenu = mn.no
        }
    },
    created(){
        console.log("branchData",this.branchData)
    }


}
</script>

<style>
.sub-menu{
    text-align: center;
    font-size: 20px;
    FONT-WEIGHT: 500;
    padding:10px;
    cursor:pointer;
}
.sub-menu-active{
    background:white;
    text-align: center;
    font-size: 20px;
    FONT-WEIGHT: 500;
    padding:10px;
    cursor:pointer;
}

.container-color{
    background: #c6c5c5;
    border-radius: 20px;
    padding: 100px 2px;
}

.content-menu{
    background: white;
    border-radius: 5px;
    margin-top: -50px;
    min-height: 650px;
    padding: 50px 5px 5px 50px;
    margin-right: 15px;
}

.edit-right{
    float: right; 
    padding-right:10px;
    font-weight: 500;
}
.btn-more{
    background-color: white !important; 
    box-shadow: none;
}

</style>