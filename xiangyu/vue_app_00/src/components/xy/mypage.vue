<template>
    <div id="d1">
        <!--页头 切换为业主-->
        <div class="fixed flex_between">
            <div>
                <img src="../resource/jiaohuan.png">
                <p>切换为业主</p>
            </div>
            <div>
                <img src="../resource/kefu.png" class="kefu">
            </div>
        </div>
        <!--登录注册 -->
        <div class="flex_between">
            <div class="flex_login">
                <p v-if="session==0"><span @click="login">登录</span>/<span>注册</span></p>
                <p v-else><span v-model="user">{{user}}</span></p>
                <p>点击编辑个人资料</p>
            </div>
            <div class="flex_avatar">
            </div>
            
        </div>
        <!--tab小标签-->
        <div class="flex_around">
            <div class="flex_tab">
                <div>
                    <img src="../resource/renzheng.png">
                </div>
                <p>我的认证</p>
            </div>
            <div class="flex_tab">
                <div>
                    <img src="../resource/guanzhu.png">
                </div>
                <p>我的关注</p>
            </div>
            <div class="flex_tab">
                <div>
                    <img src="../resource/yuekan.png">
                </div>
                <p>我的约看</p>
            </div>
            <div class="flex_tab">
                <div>
                    <img src="../resource/hongbao.png">
                </div>
                <p>我的红包</p>
            </div>
        </div>
        <!--轮播图-->
        <mt-swipe :auto="4000" class="change">
            <mt-swipe-item><img src='../../assets/pic/banner.jpg' ></mt-swipe-item>
            <mt-swipe-item><img src='../../assets/pic/carsouer.png' ></mt-swipe-item>
        </mt-swipe>
        <!--我的家-->
        <div>
            <span class="title_font">我的家</span>
            <div class="flex_around">
                <!--4个-->
                <div v-for="(elem,i) of list":key="i" class="flex_home">
                    <img :src="list[i].pic">
                    <p v-text="list[i].name"></p>
                </div>
            </div>
        </div>
        <!--底部服务-->
        <div>
            <ul>
                <li class="flex_between">
                    <span>付费宽带</span>
                    <span>></span>
                </li>
                <li  class="flex_between">
                    <span>企业权益</span>
                    <span>></span>
                </li>
                <li  class="flex_between">
                    <span>客户服务</span>
                    <span>></span>
                </li>
                <li  class="flex_between">
                    <span>更多</span>
                    <span>></span>
                </li>
            </ul>
        </div>
    </div>
   
</template>
<script>
    import carousel from "./carousel"
    export default {
        data(){
            return{
                list:[
                    {pic:require('../resource/hetong.png'),name:"我的合同",src:"hetong"},
                    {pic:require("../resource/mensuo.png"),name:"智能锁门",src:"suomen"},
                    {pic:require("../resource/baoxiu.png"),name:"在线报销",src:"baoxiao"},
                    {pic:require("../resource/dingdan.png"),name:"我的订单",src:"dingdan"},
                ],
                session:0,
                user:""

            }
        },
        created(){
            var url="mypage"
            this.axios.get(url).then(result=>{
               if(result.data.code>0){
                    this.session=1;
                    this.user=result.data.user;
                    //console.log(result)
                }
            })
      },
        methods:{
            login(){
                this.$router.push("/login")
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
    #d1>.fixed p{
        padding:10px 0;
    }
     #d1>.fixed .kefu{
         margin-right:20px;
         width:35px;
         height:35px;
     }
    .xy_container{
        padding:0;
    }
    ul{
        list-style:none;
        margin:20px 0;
        padding:0px;
        }
   .fixed{
       position:fixed;
       top:0;
       font-size:14px;
       width:100%;
       background:#fff; 
       padding:8px 0;
   }
   .fixed div:first-child{
       display:flex;
       justify-content:space-between;
   }
   .fixed img{
       width:40px;
       height:40px;
       margin-right:10px;
   }
   .flex_between>.flex_login{
       margin-top:50px;
   }
   .flex_between>.flex_login>p:first-child{
       font-size:18px;
       font-weight:bold;
       margin:0px
   }
   .flex_between>.flex_login>p:last-child{
       font-size:12px;
       color:#aaa;
       background:rgba(230,230,230,0.4);
       border-radius:4px;
       margin:0px;
       padding: 2px 5px;
   }
    .flex_between>.flex_avatar{
        border-radius:50%;
        width:70px;
        height:70px;
        background-image:url("../resource/03.png");
        background-repeat:no-repeat;
        background-size:100px 100px;
        margin-top:40px;
    }
    .flex_around>.flex_tab>div{
        width:30px;
        height:30px;
        margin-left:10px;
        margin-top:30px;
    }
     .flex_around>.flex_tab>p{
         font-size:13px;
         margin-top:7px;
     }
   .flex_around>.flex_tab>div>img{
       width:100%;
       height:100%;
   } 
    .flex_around>.flex_home{
        background:rgba(230,230,230,0.5);
        width:75px;
        height:80px;
        color:#906bc8;
        text-align:center;
        border-radius:8px;
    }
    .flex_around>.flex_home>img{
        width:40px;
        height:40px;
        margin-top:10px;
    }
     .flex_around>.flex_home>p{
         font-size:12px;
         margin:2px 0 3px 0
     }
     li.flex_between{
         padding:10px 5px;
         border-bottom:1px solid rgb(210,210,210);
     }
     li.flex_between>span:last-child{
         color:#aaa;
         font-weight:bold;
         font-size:12px;
     }
      .change{
        width:95%;
        height:150px;
        margin: 15px auto;
        border-radius: 5px;

    }
    .change img{
        width:100%;
        height:100%;
    }
</style>