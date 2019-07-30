<template>
    <!--登录页面-->
    <div class="login">
        <div>×</div>
        <h3 class="h3"><span>相寓</span>欢迎您！</h3>
        <div class="putin">
             <input placeholder="用户名/手机号" v-model="uname" ></input>
             <span @click="cancle">x</span>
        </div>
       <div class="putin">
            <input placeholder="请输入密码" :type="password" v-model="upwd"></input>
            <span @click="pear">o</span>
       </div>
        
        <button class="btn" @click="login" >登录</button><br>
        <div class="regOrForget">
            <p>手机快速注册</p>
            <p>忘记密码</p>
        </div>
        <p>Copyright &copy; 2019,北京爱家营企业管理有限公司</p>
        
    </div>
</template>
<script>
import 'vant/lib/button/style';


   export default {
       data(){
           return{
               uname:"",
               upwd:"",
               password:"password"
           }
       },
       updated() {
          this.x= document.querySelectorAll("span")[1];
          this.y= document.querySelectorAll("span")[2];
          if(this.uname==""){
              this.x.style.display="none";
          }else if(this.uname!=""){
                this.x.style.display="block"
          };
          if(this.upwd==""){
              this.y.style.display="none"
          }else if(this.upwd!=""){
                this.y.style.display="block"
          }
       },
       methods:{
           cancle(){
               this.uname="";
           },
           pear(){
               this.password="text";
           },
           login(){
                //完成登录
                //获得用户名和密码
                var uname=this.uname;
                var upwd=this.upwd;
                //创建正则表达式，字母数字下划线3~12位
                var reg=/^\w{3,12}$/i;
                //验证用户名，提示用户名出错
                if(!reg.test(uname)){
                    this.$toast("用户名格式不正确");
                    return;
                }
                //验证密码，提示密码出错
                if(!reg.test(upwd)){
                    this.$toast("密码格式不正确");
                    return;
                }
                //成功后发送ajax请求
                var url="login";
                var obj= {uname,upwd};
                this.axios.get(url,{params:obj}).then(result=>{
                    //1.判断服务器返回结果
                    //2.code>0跳转Home组件
                    if(result.data.code>0){
                        //3.创建xz/Home.vue组件、
                       
                       this.$router.push("/Home")
                     //4.code<0 交互提示框
                    }else{  
                         console.log(result);
                        this.$messagebox("提示","用户名或密码错误")
                    }
                })
            }
       }
   } 
</script>
<style scoped>
    .login{
        padding:0 15px;
    }
    .login>div:first-child{
        font-size:24px;
    }
    .login>h3{
        font-size:24px;
        margin-bottom:50px;
    }
    .login>h3>span{
        color:#906bc8;
    }
    .putin{
        position:relative;
    }
    .putin+.putin{
        margin-bottom:20px;
    }
    .putin>span{
        position:absolute;
        top:7px;
        right:10px;
        font-size:18px;
        display:none;
    }
    input{
        width:100%;
        height:30px;
        font-size:16px;
        line-height:30px;
        background:#ddd;
        border:0;
        border-radius:4px;
        margin-bottom:10px;
        outline:0;
        padding:8px 2px;
    }
    .btn{
        color:#fff;
         background:#906bc8;
         font-size:18px;
         width:100%;
         box-shadow: 0 0 1px #b8bbbf;
         border-radius:4px;
         border:0;
         height:40px;
         margin-top:5px;
         margin-bottom:15px;
    }
    .regOrForget{
        display:flex;
        justify-content:space-between;
        margin-top:5px;
    }
    .regOrForget>p:first-child{
        color:#906bc8;
    }
   .login>p{
       position:absolute;
       bottom:20px;
       left:30px;
       font-size:14px;
   }
</style>