import Vue from 'vue'
import Router from 'vue-router' 
import DashBoardView from '../DashBoard'

import ExpmListView from '../pages/ExpirementList'
import ExpmRootListView from '../pages/ExpirementRootList' 
import ExpmView from '../pages/Expirement'

import AppaListView from '../pages/ApparatusList'
import AppaView from '../pages/Apparatus.vue'

import ReagListView from '../pages/ReagentList'
import ReagView from '../pages/Reagent'

import MessageView from '../pages/BroadMessage'

Vue.use(Router)


const routes = [
{
  path:'/',
  component:DashBoardView,
  children:[
  {
    path:'expms',
    name:'Expms',
    component: ExpmListView
  },
  {
    path:'expms/:id',
    name:'Expm',
    component:ExpmView
  },
  {
    path:'expmroots',
    name:'ExpmRoots',
    component: ExpmRootListView
  },
  {
    path:'apparatus',
    name:'AppaList',
    component: AppaListView
  },
  {
    path:'apparatus/:id',
    name:'Appa',
    component:AppaView
  },
  {
    path:'reagents',
    name:'ReagList',
    component:ReagListView
  },
  {
    path:'reagents/:id',
    name:'Reag',
    component:ReagView
  },
  {
    path:'msg',
    name:"MSG",
    component:MessageView
  }
  ]
}

]
export default new Router({routes})
