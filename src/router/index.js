import Vue from 'vue';
import Router from 'vue-router';
import Home from  '../components/common/Home.vue'
import Dashboard from  '../components/page/Dashboard.vue'
import Icon from  '../components/page/Icon.vue'
import BaseTable from  '../components/page/BaseTable.vue'
import Tabs from  '../components/page/Tabs.vue'
import BaseForm from  '../components/page/BaseForm.vue'
import VueEditor from  '../components/page/VueEditor.vue'
import Markdown from  '../components/page/Markdown.vue'
import Upload from  '../components/page/Upload.vue'
import BaseCharts from  '../components/page/BaseCharts.vue'
import DragList from  '../components/page/DragList.vue'
import DragDialog from  '../components/page/DragDialog.vue'
import Permission from  '../components/page/Permission.vue'
import Page404 from  '../components/page/404.vue'
import Page403 from  '../components/page/403.vue'
import Login from  '../components/page/Login.vue'


Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: Home,
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: Icon,
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: BaseTable,
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: Tabs,
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: BaseForm,
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: VueEditor,
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: Markdown,
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: Upload,
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: BaseCharts,
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: DragList,
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: DragDialog,
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: Permission,
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: Page404,
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: Page403,
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
