<template>
    <div id="d1">
        <div class="flex_between fixed">
            <span class="big_font">相寓</span>
            <div class="btn" @click="history">
                <img src="../resource/fangdajing.png">
                <span class="lit_font">您想住哪里？</span>
            </div>
            <div class="lit_font" @click="city">
                <span>北京</span>
                <span>></span>
            </div>
        </div>
    </div>
</template>
<script>
   
</script>
<script>
    export default {
        data(){
            return{}
        },
        methods:{
            city(){
                this.$router.push("/city");
            },
            history(){
                this.$router.push("/lookUp")
            }
        }
    }
</script>
<style>
    @import '../css/common.css';
</style>
<style scoped>
    #d1{
        padding:0 8px;
    }
    .flex_between{
        width:95%;
        background:#fff;
        padding:6px 0;
        z-index:999;
    }
    .fixed{
        position:fixed;
        top:0;
    }
    .big_font{
        font-family:"幼圆";
        font-weight:bold;
        color:#906bc8;
    }
    .btn{
        width:70%;
    }
    .btn>span{
        color:#999;
    }
    #d1 .btn>img{
        width:15px;
        height:15px;
        margin-right:5px;
    }
</style>