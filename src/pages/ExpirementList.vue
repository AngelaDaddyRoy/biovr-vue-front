<template>
  <div class="content-wrapper">
  
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        子实验列表
        <small>Expirement List</small>
      </h1>
  
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="box box-info ">
        <div class="box box-header">
          <div class="pull-right btn-group">
            <button class="btn btn-lg btn-success" @click="addExpm">增加</button>
            <button class="btn btn-lg btn-info" @click="sortList">排序</button>
            <button class="btn btn-lg btn-primary" @click="submitChange">提交修改</button>
          </div>
        </div>
  
        <div class="content">
          <div class="well">
            <table class="table table-responsive">
              <thead>
                <tr>
                  <td width="10%">序号</td>
                  <td width="40%">名称</td>
                  <td width="20%">父实验</td>
                  <td width="10%">二维码</td>
                  <td width="20%">操作</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in expms">
                  <td>
                    <input type="text" class="form-control" v-model="r.index">
                  </td>
                  <td>
                   <p>{{r.name}}</p> 
                  </td>
                  <td>
                    <p>{{r.expirementRootName}}</p>
                  </td>
                  <td>
                    <i class="q-code fa fa-qrcode" @click="showQCode(r)"></i>
                  </td>
                  <td>
                  <toggle-button @change="setExpmState(r)"/>
                   <router-link :to="'/expm/'+r.id" class="btn btn-sm btn-info">                   
                  <span>编辑</span>
                </router-link>
                    
                    <button class="btn btn-sm btn-danger" @click="deleteConfirm(r)">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
     <div class="modals">
       
  
      <modal name="delConfirm">
        <div class="well">
          <h1>确认删除</h1>
          <p>删除{{currSelection.name}}吗？</p>
          <button class="btn btn-danger btn-lg btn-block" @click="deleteItem">删除</button>
        </div>
  
      </modal>
      <modal name="showQcode">
          <img :src="currSelection.qCode" alt="">
      </modal>
    </div>
  </div>

   

</template>
<style scoped>
.q-code{
    font-size: 26px;
}
</style>

<script> 
export default {
  name: 'Expm',
  data() {
    return {
      expms: [],
      currSelection:{}
    }
  },
  created:function(){
    
    console.log(this.$route.params.id);
     this.axios.get('/expirements/rootid/'+this.$route.params.id).then((response) => {
        let resultes = response.data;
        if (resultes.success) {
          this.expms = resultes.data;
        }
      }) 
  },
  methods:{
     showQCode:function(expm){
        this.currSelection = expm
      this.$modal.show('showQcode')
    },
     edit:function(expm){

    },
    deleteConfirm:function(expm){
        this.currSelection=expm;
          this.$modal.show('delConfirm');
    },
    deleteItem:function(){

    },
    addExpm:function(){

    },
    sortList:function(){

    },
    submitChange:function(){

    },
    setExpmState:function(expm){

    }
  }
}
</script>