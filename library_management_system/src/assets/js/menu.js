const list = [
  {
    name: '首页',
    icon: 'House',
    url: '/',
  },
  {
    name: '图书管理',
    icon: 'Collection',
    url: '/',
    childrens: [
      {
        name: '图书列表',
        url: '/',
      },
      {
        name: '书籍管理',
        url: '/',
      },
      {
        name: '图书借阅',
        url: '/',
      },
    ],
  },
  {
    name: '系统设置',
    icon: 'Setting',
    url: '/',
    childrens: [
      {
        name: '用户管理',
        url: '/',
      },
      {
        name: '角色管理',
        url: '/',
      },
    ],
  },
];

export default list;
