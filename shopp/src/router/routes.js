
// import React ,{Component} from 'react'

import Login from '../views/login/Login'
import City from '../views/city/City'
import Shops from '../views/shop/Shopping'
import Xiangqing from '../views/xangqing/Xiangqing'
import Zhuce from '../views/zhuce/Zhuce'
import Home from '../views/home/Home'
import Dingdan from '../views/dingdan/Dingdan'
import My from '../views/my/My'

const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/city',
        component:City
    },
    {
        path:'/shops',
        component:Shops
    },
    {
        path:'/xiangqing',
        component:Xiangqing
    },
    {
        path:'/dingdan',
        component:Dingdan
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/zhuce',
        component:Zhuce
    },
    {
        path:'/',
        redirect:'/Home'
    }
]

export default routes