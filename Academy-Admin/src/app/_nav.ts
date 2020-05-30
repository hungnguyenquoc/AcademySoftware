import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Hệ Thống',
    url: '/admin-user',
    icon: 'icon-user',
    children: [
      {
        name: 'Người dùng',
        icon: 'icon-fsd',
        url: '/admin-user/admin-user-manage',
      },
      {
        name: 'Thông tin người dùng',
        icon: 'icon-fsd',
        url: '/admin-user/admin-user-edit/:id',
      },
      {
        name: 'Nhóm quyền',
        icon: 'icon-fsd',
        url: '/admin-roles/admin-role-group',
      },
      {
        name: 'Chức năng',
        icon: 'icon-fsd',
        url: '/admin-roles/admin-role-function'
      }
    ]
  },
  {
    name: 'Thông báo',
    url: '/admin-announcement/admin-announcement-list',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý học viên',
    url: '/admin-student/admin-student-list',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý tài khoản',
    url: '/admin-users',
    icon: 'icon-user',
  },
  {
    title: true,
    name: 'Đào tạo'
  },
  {
    name: 'Quản lý lớp học',
    url: '/admin-class',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Danh sách lớp học',
        url: '/admin-class/admin-class-list',
        icon: 'icon-puzzle'
      }]
    },
  {
    name: 'Quản lý ngành học  ',
    url: '/admin-major',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý khóa học',
    url: '/admin-courses',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý tạm thời',
    url: '/admin-template',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý chương trình học',
    url: '/admin-program-study',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý chương trình',
    url: '/admin-programs',
    icon: 'icon-pencil',
  },
  {
    name: 'Quản lý danh mục',
    url: '/admin-course-category',
    icon: 'icon-user',
  },
  {
    name: 'Quản lý danh mục',
    url: '/admin-course-category',
    icon: 'icon-user',
  },
 
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  // {
  //   name: 'Đào tạo',
  //   url: '/admin-class',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Lớp học',
  //       url: '/admin-class/admin-class-list',
  //       icon: 'icon-puzzle'
  //     }]
  //   },
    {
      name: 'CT Đào tạo',
      url: '/admin-education',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Ngành học',
          url: '/admin-education/admin-major',
          icon: 'icon-puzzle'
        }]
      },
   {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
];
