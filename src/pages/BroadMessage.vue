<template>
  <div class="content-wrapper">
  <div class="alert alert-info fade in">
  <section class="content">
     <h1>发送广播消息</h1>
    <input type="text" v-model="msg.title" class="form-control" placeholder="title">
    <input type="text" v-model="msg.content" class="form-control"  placeholder="content">
    <input type="text" v-model="msg.sender.username" class="form-control"  placeholder="username">
    <input type="text" v-model="msg.sender.avater" class="form-control"  placeholder="avater">
     <button class="btn btn-primary btn-lg btn-block" @click="submitChange">
       提交
     </button>
  </section>
    
  </div>
  </div>
 
</template>

<script>
  export default{
    name:'Msg',
    data(){
      return{
        msg:{
          title:'',
          content:'',
          sender:{
            username:'',
            avater:''
          },
          sendTime:null
        }
      }
    },
    methods:{
      submitChange:function(){
        this.msg.sendTime = new Date();
             this.axios.post("/broads",this.msg).then((response) => {
                let resultes = response.data;
                if (resultes.success) {
                    console.log(resultes.data);
                }
            })
      }
    }
  }
</script>