import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Registration'
  },
  {
    name: 'Add User',
    url: '/user/adduser',
    icon: 'icon-drop'
  },
  {
    name: 'View User',
    url: '/user/viewuser',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Appointments'
  },
  {
    name: 'Heading',
    url: '/user',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Register User',
        url: '/user/adduser',
        icon: 'icon-puzzle'
      },
      {
        name: 'View User',
        url: '/user/viewuser',
        icon: 'icon-puzzle'
      },
           {
        name: 'Forms',
        url: '/user/forms',
        icon: 'icon-puzzle'
      },
      
      {
        name: 'Pagination',
        url: '/user/paginations',
        icon: 'icon-puzzle'
      },

    ]
  },
  {
    name: 'XYZ',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'MENU1',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'MENU2',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      }
    ]
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
      }
    
    ]
  }
  

];
