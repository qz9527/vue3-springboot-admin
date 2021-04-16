const bookRouter = {
    route: null,
    name: null,
    title: '图书管理',
    type: 'folder', // 类型: folder, tab, view
    icon: 'el-icon-notebook-1',
    filePath: 'views/book/', // 文件路径
    order: null,
    inNav: true,
    children: [
      {
        title: '添加图书',
        type: 'view',
        name: 'BookCreate',
        route: '/book/add',
        filePath: 'views/book/book-create.vue',
        inNav: true,
        icon: 'el-icon-notebook-1',
      },
      {
        title: '图书列表',
        type: 'view',
        name: 'BookList',
        route: '/book/list',
        filePath: 'views/book/book-list.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
      },
    ],
  }
  
  export default bookRouter