<template>
   <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            实验列表
            <small>Expirement List</small>
        </h1>

    </section>
    <!-- Main content -->
    <section  class="content">
        <div class="box box-info ">
            <div class="box box-header">
                <div class="pull-right btn-group">
                    <button class="btn btn-success btn-lg" data-toggle="modal" data-target="#windowAddExpm" >新增实验</button> 
                </div>

            </div>
            <div class="box-body container">
                <table id="main-table" class="display" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>实验编号</th>
                            <th>实验名称</th>
                            <!--<th>父实验</th>-->
                            <th>创建日期</th>
                            <th>实验二维码</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="e in expms">
                            <!-- v-bind:class="itsClass" -->
                            <td  >{{e.index}}</td>
                            <td  >{{e.name}}</td>
                            <!--<td align="center" th:text="${expm.parentExpmName}">父实验</td>-->
                            <td  >{{e.createTime}}</td>
                            <td >
                                <i v-if="e.qCode!=undefined" class="glyphicon glyphicon-qrcode" style="cursor: pointer;font-size: 32px;"></i>
                            </td>
                            <td >
                        <button class="btn btn-sm btn-info"></button>
                        <button class="btn"></button>
                        <button class="btn"></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <!--新增实验-->
        <div  id="windowAddExpm" class="modal fade" tabindex="-1" role="dialog">
            <div  class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">新增实验</h4>
                    </div>
                    <div class="modal-body">
                        <form action="/expirements" role="form" class="form-horizontal" method="post">
                            <div class="form-group">
                                <div class=" col-sm-offset-1 col-sm-10">
                                    <input type="text" class="form-control" name="name" placeholder="输入实验名称" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-1 col-sm-10">
                                    <button class="btn btn-primary" type="submit" >确定</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div> 
        </div>          

    </section> 
</div>
</template>

<script>
  export default {
    name: 'Expirements',
    data(){
        return {
            expms:[]
        }
    },
    created:function(){
        this.getExpms();
    },
    methods:{
        getExpms:function(){
             //获取所有仪器,并排除已选的仪器
             this.axios.get('/expirements').then((response) => {
                let resultes = response.data;
                if (resultes.success) {
                    this.expms = resultes.data;
                }
            })
         }
     }

 }
</script>