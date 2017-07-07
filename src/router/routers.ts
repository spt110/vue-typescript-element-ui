
import TodoList from '@/components/todo-list/TodoList.vue'
import Platform from '@/pages/platform/platform.vue'

export default [
  {
    path: '/platform',
    component: Platform,
    name: '平台信息维护',
    meta: {
      menu: true
    }
  },
  {
    path: '/',
    component: TodoList,
    name: 'todoList',
    meta: {
      menu: true
    }
  },
  {
    path: '/login',
    component: TodoList,
    name: '登陆',
    meta: {
      menu: false
    }
  },
  {
    path: '/feature',
    component: TodoList,
    name: '功能集管理',
    meta: {
      menu: true,
      operations: 'z0101000'
    },
    children: [
      {
        path: 'add',
        component: TodoList,
        meta: {
          menu: true,
          operations: 'z0101000'
        }
      },
      {
        path: ':id',
        component: TodoList,
        meta: {
          menu: true,
          operations: 'z0101000'
        }
      },
      {
        path: ':id/edit',
        component: TodoList,
        meta: {
          menu: true,
          operations: 'z0101000'
        }
      }
    ]
  },
  {
    path: '/customer',
    component: TodoList,
    name: '集团管理',
    meta: {
      menu: true,
      operations: 'z0201000'
    },
    children: [
      {
        path: ':id',
        component: TodoList,
        meta: {
          menu: true,
          operations: 'z0201000'
        }
      }
    ]
  },
  {
    path: '/service',
    component: TodoList,
    name: '服务包管理',
    meta: {
      menu: true,
      operations: 'z0301000'
    }
  },
  {
    path: '/userservice',
    component: TodoList,
    name: '公司服务包管理',
    meta: {
      menu: true,
      operations: 'z0401000'
    }
  },
  {
    path: '/label',
    component: TodoList,
    name: '标签管理',
    meta: {
      menu: true,
      operations: 'z0501000'
    },
    children: [
      {
        path: ':id',
        component:TodoList,
        meta: {
          menu: true,
          operations: 'z0501000'
        }
      }
    ]
  },
  {
    path: '/cooperate',
    component: TodoList,
    name: '协同管理',
    meta: {
      menu: true,
      operations: 'z0601000'
    },
    children: [
      {
        path: 'add',
        component: TodoList,
        meta: {
          menu: true,
          operations: 'z0601000'
        }
      },
      {
        path: ':id',
        component:TodoList,
        meta: {
          menu: true,
          operations: 'z0601000'
        }
      },
      {
        path: ':id/edit',
        component: TodoList,
        meta: {
          menu: true,
          operations: 'z0601000'
        }
      }
    ]
  },
  {
    path: '/system',
    component: TodoList,
    name: '系统配置',
    meta: {
      menu: true,
      operations: 'z0701000'
    }
  },
  {
    path: '/company',
    component: TodoList,
    name: '企业开票信息',
    meta: {
      menu: true,
      operations: 'z0801000'
    }
  },
  {
    path: '/center',
    component: TodoList,
    name: '个人中心',
    meta: {
      menu: false
    }
  },
  {
    path: '/ukey',
    component: TodoList,
    name: 'Ukey申请',
    meta: {
      menu: true,
      operations: 'z1101000'
    }
  },
  {
    path: '/maintenance',
    component: TodoList,
    name: '平台维护',
    meta: {
      menu: true,
      operations: 'z1001000' //z1001000  z0301000
    }
  }
];
