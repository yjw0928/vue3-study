const VUE_ROUTER_PAGES = [
  {
    name: 'page1',
    title: '路由参数和查询参数',
    componentName: 'PageView1',
  },
]

const VUE_PAGES = [
  {
    name: '202503182206',
    title: '响应式数据',
    componentName: 'JSXView',
  },
]

export const ALL_PAGES = [...VUE_PAGES, ...VUE_ROUTER_PAGES]

export const ROUTE_LIST = [
  {
    name: 'VUE',
    title: 'vue',
    children: VUE_PAGES,
  },
  {
    name: 'vue-router',
    title: 'vue-router',
    children: VUE_ROUTER_PAGES,
  },
]
