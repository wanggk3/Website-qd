/*
 * @Description: '律师介绍'页面所有路由
 * @Author: 雷
 * @Date: 2020-12-04 16:21:00
 * @LastEditTime: 2020-12-04 16:21:00
*/

export default [
    {
        path: 'lawyer',
        component: resolve => require(['@/views/lawyer'], resolve),
        name: 'Lawyer',
        meta: {
            nav: '律师介绍'
        }
    },
    {
        path: 'product/:id',
        component: resolve => require(['@/views/product/detail'], resolve),
        name: 'Product_Detail',
        meta: {
            nav: '产品中心'
        }
    },
      
]
