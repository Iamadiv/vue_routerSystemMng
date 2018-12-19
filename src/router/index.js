import Vue from 'vue'
import Router from 'vue-router'
import BMapComponent from '@/components/netWorkOrganization/BMapComponent'
import ResourceMng from '@/components/resourceMng/ResourceMngIndex'
import PerformanceData from '@/components/performanceData/PerformanceDataIndex'
import AlarmHistory from '@/components/alarmHistory/AlarmHistoryIndex'
import ReportStatistics from '@/components/reportStatistics/reportStatisticsIndex'
import Demo from '@/components/H5Demo/demo'
import Video from '@/components/video/Video'

Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
  {
  				path: '/',
  				redirect:'BMapComponent'
  				
  },
   {
      path: '/ResourceMng',
      name: 'ResourceMng',
      component: ResourceMng
    },
    {
      path: '/BMapComponent',
      name: 'BMapComponent',
      component: BMapComponent
    },  
    {
      path: '/PerformanceData',
      name: 'PerformanceData',
      component: PerformanceData
    },
    {
      path: '/AlarmHistory',
      name: 'AlarmHistory',
      component: AlarmHistory
    },
    {
      path: '/ReportStatistics',
      name: 'ReportStatistics',
      component: ReportStatistics
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    }
  ]
})
