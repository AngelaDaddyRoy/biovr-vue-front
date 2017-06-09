<template>
 <div class="content-wrapper">
 <div class="alert alert-info fade in">
 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
 {{pageMsg}}
 </div>
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      根实验列表
      <small>Expirement Root List</small>
    </h1>

  </section>
  <!-- Main content -->
  <section  class="content">
    <div class="box box-info ">
      <div class="box box-header">
        <div class="pull-right btn-group">
         <button class="btn btn-lg btn-success" @click="addRootExpm">增加</button>
         <button class="btn btn-lg btn-info" @click="sortList">排序</button>
         <button class="btn btn-lg btn-primary" @click="submitChange">提交修改</button>
       </div> 
     </div>

     <div  class="content">
      <div class="well">
        <table class="table table-responsive">
          <thead>
            <tr>
              <td width="5%">序号</td>
              <td>名称</td>
              <td>描述</td>
              <td>封面图</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in expmRoots">
              <td><input type="text" class="form-control" v-model="r.index" ></td>
              <td><input type="text" class="form-control" v-model="r.name" ></td>
              <td><input type="text" class="form-control" v-model="r.description" > </td>
              <td>
                <img v-if="r.coverImage!=undefined" :src="r.coverImage"  @click="showImage(r)" class="table-image"></i>
                <span v-else>无</span>
              </td>
              <td>
                <a class="btn btn-sm btn-info" @click="openSetImageWindow(r)">封面</a>
                <button class="btn btn-sm btn-danger" @click="deleteConfirm(r)" >删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section> 

<div class="modals">
  <modal name="showImage" :width="800" :height="600">
  <img :src="currSelection.coverImage" alt="">
</modal>
<modal name="setImage" :height="140">
<div class="well">
   <input type="text" v-model="currSelection.coverImage" class="form-control" placeholder="输入图片地址">
   <button class="btn btn-lg btn-success btn-block"   @click="hideModal('setImage')">确定</button>
</div>
 
</modal>

<modal name="delConfirm">
<div class="well">
   <h1>确认删除</h1>
  <p>删除{{currSelection.name}}吗？</p>
  <button class="btn btn-danger btn-lg btn-block" @click="deleteItem">删除</button>
</div>
 
</modal> 
</div>



</div>

</template>

<style>
  .modals button{
    margin-top: 15px
  }
  .table-image{
    width:32px;
    height:32px;
    cursor: pointer;
  }
</style>
<script> 

  export default {
    name: 'ExpirementRoots',
    data(){
      return {
        expmRoots:[],
        currSelection:{},
        pageMsg:null
      }
    },
    created:function(){
      this.getExpmRoots();
      },
    methods:{
      getExpmRoots:function(){ 
               this.axios.get('/expirements/roots').then((response) => {
                let resultes = response.data;
                if (resultes.success) {
                  this.expmRoots = resultes.data;
                }
              })
             },
      addRootExpm:function(){
              const length = this.expmRoots.length;
              this.expmRoots.push({index:length+1,name:"",descripttion:"",coverImage:null});
              this.sortList();
            },
            sortList:function(){
              this.expmRoots.sort(this.sortListByIndex);
          //排序后对序号进行归一
          for(let i=0;i<this.expmRoots.length;i++){
            this.expmRoots[i].index=i+1;
          }
        },
        submitChange:function(){

            this.axios.post('/expirements/roots/batch',this.expmRoots).then((response) => {
                let resultes = response.data
                if (resultes.success) {
                  this.expmRoots = resultes.data
                  this.pageMsg='提交成功！'
                }
              })
         
        },
        showImage:function(rExpm){
          this.currSelection=rExpm
          this.$modal.show('showImage')
       },
       openSetImageWindow:function(rExpm){
        this.currSelection=rExpm
        this.$modal.show('setImage')
      },
      deleteConfirm:function(rExpm){
        this.currSelection=rExpm
        if(rExpm.name===""){
          this.deleteItem();
        }
        else{
           this.$modal.show('delConfirm');
        }
       
      },
      deleteItem:function(){
            const index = this.expmRoots.findIndex(x=>x.index===this.currSelection.index);
            if(index!=-1){
                this.expmRoots.splice(index,1);
                this.sortList();
            }
            this.hideModal('delConfirm')
        },
        hideModal:function(modalName){
          this.$modal.hide(modalName);
        }

    }
  }
</script>