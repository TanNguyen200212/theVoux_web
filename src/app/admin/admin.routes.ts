import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import DashboardComponent from './business/dashboard/dashboard.component';
import ProfileComponent from './business/profile/profile.component';
import TablesComponent from './business/tables/tables.component';

export const adminRoutes: Routes = [
  //  {
  //    path: 'admin',
  //     component: AdminComponent,
  //     children: [
  //   // {
  //   //   path: '',
  //   //   redirectTo: 'dashboard',
  //   //   pathMatch: 'full',
  //   // },
  //   {
  //     path: 'dashboard',
  //     component :DashboardComponent,
  //   },
  //   {
  //     path: 'other',
  //     component: AdminLayoutComponent,
  //     children: [
  //         {
  //       path: '',
  //       loadChildren: () => import('./layouts/admin-layout/admin-layout.routes').then(x => x.adminLayoutRoutes)
  //   }],
  // },
  //   // { path: '', redirectTo: '/admin/dashboard ', pathMatch: 'full' },
  //   {
  //     path: '**',
  //     redirectTo: 'dashboard'
  //   }
  // ],
  //  },

//   {
//     path: '',
//     loadComponent: () => import('./shared/components/layout/layout.component'),
//     children: [
//         {
//             path: 'dashboard',
//             component:DashboardComponent,
//         },
//         {
//             path: 'profile',
//             component: ProfileComponent,
//         },
//         {
//             path: 'tables',
//             component:TablesComponent,
//         },
//         {
//             path: '',
//             redirectTo: 'dashboard',
//             pathMatch: 'full'
//         }

//     ]
// },
// {
//     path: '**',
//     redirectTo: 'dashboard'
// }


{
     path: '',
      component: AdminComponent,
      children: [
        {
              path: '',
              loadComponent: () => import('./shared/components/layout/layout.component'),
              children: [
                {
                  path: 'dashboard',component :DashboardComponent,

                },
                {
                  path: 'profile',
                  component :ProfileComponent,
                },
                {
                  path: 'tables',
                  component :TablesComponent,
                }
           ],
        }
    ]
  }
]
