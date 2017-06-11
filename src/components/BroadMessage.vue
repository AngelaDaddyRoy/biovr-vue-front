<template>
	 <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            消息推送
            <small>Message</small>
        </h1>

    </section>
    <!-- Main content -->
    <section  class="content">
        <div class="box box-info ">
            <div class="box box-header">
                <div class="pull-right btn-group">
                    
                </div>

            </div>
            <div class="box-body container">
               	<input type="text" class="form-control" v-model="msg.title" placeholder="title">
               	<input type="text" class="form-control" v-model="msg.content" placeholder="content">
               	<input type="text" class="form-control" v-model="msg.sender.username" placeholder="username">
               	<input type="text" class="form-control" v-model="msg.sender.avater" placeholder="avater">
               	<button class="btn btn-lg btn-block btn-primary" @click="submitChange">提交</button>
            </div>
        </div>


            

    </section> 
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
					}
				}
			}
		},
		methods:{
			submitChange:function(){
				this.axios.post('/broads',this.msg).then((response) => {
                let resultes = response.data;
                if (resultes.success) {
                    console.log(resultes.data);
                }
            })
			}
		}
	}
</script>

