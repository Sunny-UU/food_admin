import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import store from '../store'

Vue.use(VueRouter)

export const constRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login'),
  },
  {
    path:'/',
    component:Home,
    redirect:'/login',
    children: [
      {
        path: '/about',
        component: () => import('@/components/About'),
        name: 'TableDate',
        meta: { title: 'Complex able',icon: 'el-icon-s-help' }
      },
    ]
  },
  {
    path:'/home',
    component:Home,
    children: [
      {
        path: '/about',
        component: () => import('@/components/About'),
        name: '首页',
        meta: { title: '首页',icon: 'el-icon-s-help' }
      },
    ]
  },{
    path:'/table',
    component:Home,
    children: [
      {
        path: '',
        component: () => import('@/views/table/complex-table'),
        name: '菜谱管理',
        meta: { title: '菜谱管理',icon: 'el-icon-s-help' }
      },
    ]
  },
]

export const reRoutes = [
  {
    path: '/upload',
    name: '个人管理',
    component:Home,
    meta: { title: '个人管理',icon: 'el-icon-s-help' },
    children:[
      {
        path: 'food',
        component: () => import('@/components/table/tableB'),
        name: '新增文章',
        meta: { title: '新增文章',icon: 'el-icon-s-help' }
      },
      {
        path: 'video',
        component: () => import('@/components/table/tableA'),
        name: '上传文件',
        meta: { title: '上传文件',icon: 'el-icon-s-help' }
      }
    ]
  },
  {
    path: '/audit',
    name: '审核管理',
    component:Home,
    meta: { title: '审核管理',icon: 'el-icon-s-help' },
    children:[
      {
        path: 'food',
        component: () => import('@/components/table/tableA'),
        name: '文章审核',
        meta: { title: '菜谱审核',icon: 'el-icon-s-help' }
      },
      {
        path: 'video',
        component: () => import('@/components/table/tableC'),
        name: '视频审核',
        meta: { title: '视频审核',icon: 'el-icon-s-help' }
      },
      {
        path: 'member',
        component: () => import('@/components/table/tableA'),
        name: '会员审核',
        meta: { title: '会员审核',icon: 'el-icon-s-help' }
      },
    ]
  },
  {
    path: '/admin',
    name: '用户管理',
    component:Home,
    meta: { title: '用户管理',icon: 'el-icon-s-help' },
    children:[
      {
        path: 'user',
        component: () => import('@/components/table/tableB'),
        name: '用户管理',
        meta: { title: '用户管理',icon: 'el-icon-s-help' }
      },
      {
        path: 'role',
        component: () => import('@/components/table/tableB'),
        name: '角色管理',
        meta: { title: '角色管理',icon: 'el-icon-s-help' }
      },
    ]
  },
  {
    path: '/questionnaire',
    name: '问卷管理',
    component:Home,
    meta: { title: '问卷管理',icon: 'el-icon-s-help' },
    children:[
      {
        path: 'create',
        component: () => import('@/components/table/tableA'),
        name: '创建问卷',
        meta: { title: '创建问卷',icon: 'el-icon-s-help' }
      },
      {
        path: 'manager',
        component: () => import('@/components/table/tableA'),
        name: '问卷管理',
        meta: { title: '问卷管理',icon: 'el-icon-s-help' }
      },
    ]
  },
  {
    path: '/configure',
    name: '项目配置',
    component:Home,
    meta: { title: '项目配置',icon: 'el-icon-s-help' },
    children:[
      {
        path: 'theme',
        component: () => import('@/components/table/tableA'),
        name: '切换主题',
        meta: { title: '创建问卷',icon: 'el-icon-s-help' }
      },
      {
        path: 'memu',
        component: () => import('@/components/table/tableA'),
        name: '菜单配置',
        meta: { title: '菜单配置',icon: 'el-icon-s-help' }
      },
    ]
  },
  {
    path: '/serve',
    component:Home,
    name: '问题反馈',
    // meta: { title: '问题反馈',icon: 'el-icon-s-help' },
    children:[
      {
        path: 'index',
        component: () => import('@/components/table/tableA'),
        name: '问题反馈',
        meta: { title: '问题反馈',icon: 'el-icon-s-help' }
      },
    ]
  },
]

//重置路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export const createRouter = (constRoutes) => new VueRouter({
  routes:constRoutes
})

/**
 * 重写路由的push方法
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// //刷新页面时重新获取路由
// router.onReady(to => {
//   const status = store.getters.login;
//   if (status) {
//     router.addRoutes(status);
//   }else{
//     router.push(`/?redirect=${to.path}`);
//   }
// });

export const  router = createRouter(constRoutes);

