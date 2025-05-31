import ProfileComponent from '../ProfileComponent';
import SecurityComponent from '../SecurityComponent';
import PasswordComponent from '../PasswordComponent';
import HelpComponent from '../HelpComponent';
import LogoutComponent from '../LogoutComponent';

const menuTree = [
    {
      title: "Settings",
      link: "/settings",
      component: null,
      children: [
        {
          title: "Account",
          link: "/settings/account",
          component: null,
          children: [
            {
              title: "Profile",
              link: "/settings/account/profile",
              component: ProfileComponent,
            },
            {
              title: "Security & Privacy",
              link: "/settings/account/security",
              component: SecurityComponent,
            },
            {
              title: "Password",
              link: "/settings/account/password",
              component: PasswordComponent,
            },
          ]
        }
      ]
    },
    {
      title: "Help",
      link: "/help",
      component: HelpComponent,
      children: [
        {
          title: "FAQ's",
          link: "/help/faqs",
          component: null,
        }
      ]
    },
    {
      title: "Logout",
      link: "/logout",
      component: LogoutComponent,
      children: []
    }
  ];
  
  export default menuTree;