<template>
  <div id="dashboard">

    <!-- topbar -->
    <header class="main-header">
      <a href="../../index2.html" class="logo">
        <!-- LOGO -->
        BioVR
      </a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" role="navigation">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
          <i class="fa fa-bars"></i>asd
        </button>
      </nav>
    </header>
    <!-- topbar end   -->

    <!-- sidebar -->
    <!-- Left side column. contains the logo and sidebar -->
    <aside id="push-menu" class="main-sidebar">

      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar"> 
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">管理菜单</li>
          <!-- Optionally, you can add icons to the links -->
          <li> 
            <router-link to="/expirements"><i class="fa fa-link"></i><span>实验管理</span></router-link>
          </li>
        <li>
          <router-link to="/apparatus"><i class="fa fa-link"></i><span>仪器管理</span> </router-link>   
        </li>
        <li>
          <router-link to="/reagents"><i class="fa fa-link"></i><span>试剂管理</span> </router-link>   
        </li> 
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>用户管理</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#">管理员</a></li>
            <li><a href="#">教师</a></li>
            <li><a href="#">学生</a></li>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
  <!-- sidebar end -->

  <!-- content -->

    <router-view></router-view>

 <!-- content end -->

 <!-- footer -->
 <!-- footer end -->


</div>
</template>



<script>
  export default {
    name: 'dashboard'
  }
</script>