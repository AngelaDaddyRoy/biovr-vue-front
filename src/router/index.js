import Vue from 'vue'
import Router from 'vue-router' 
import DashBoardView from '../components/DashBoard'
import ExpirementRootListView from '../components/ExpirementRootList'
import ExpirementListView from '../components/ExpirementList'
import ExpirementView from '../components/Expirement'
import ApparatusListView from '../components/ApparatusList'
import ApparatusView from '../components/Apparatus.vue'
import ReagentListView from '../components/ReagentList'
import ReagentView from '../components/Reagent'

import MessageView from '../components/BroadMessage'

Vue.use(Router)


const routes = [
{
  path:'/',
  component:DashBoardView,
  children:[
  {
    path:'expirements',
    name:'ExpmRootList',
    component: ExpirementRootListView
  },
  {
    path:'expirements/:id',
    name:'Expm',
    component:ExpirementView
  },
  {
    path:'apparatus',
    name:'AppaList',
    component:ApparatusListView
  },
  {
    path:'apparatus/:id',
    name:'Appa',
    component:ApparatusView
  },
  {
    path:'reagents',
    name:'ReagList',
    component:ReagentListView
  },
  {
    path:'reagents/:id',
    name:'Reag',
    component:ReagentView
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
