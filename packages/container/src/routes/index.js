import { lazy } from 'react';
import {
  HomeUrl,
  WisataUrl,
  WisataDetailUrl,
  ProvinceUrl,
  ProvinceDetailUrl,
} from '../constant/url';

const Routes = [
  {
    path: HomeUrl,
    component: lazy(() => import('../pages/Home')),
    exact: true,
  },
  {
    path: WisataUrl,
    component: lazy(() => import('../pages/Wisata')),
    exact: true,
  },
  {
    path: WisataDetailUrl,
    component: lazy(() => import('../pages/Wisata/Detail')),
    exact: true,
  },
  {
    path: ProvinceUrl,
    component: lazy(() => import('../pages/Province')),
    exact: true,
  },
  {
    path: ProvinceDetailUrl,
    component: lazy(() => import('../pages/Province/Detail')),
    exact: true,
  },
];

export default Routes;
