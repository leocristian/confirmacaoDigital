import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PhotoInfoPage from '../views/PhotoInfoPage.vue'
import TakePhotoPage from '../views/TakePhotoPage.vue'
import LicensePage from '../views/LicensePage.vue'
import ConfirmationPage from '../views/ConfirmationPage.vue'
import MoreInfoPage from '../views/MoreInfoPage.vue'
import DocumentPage from '../views/DocumentPage.vue'
import PhotoDocPage from '../views/PhotoDocPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/moreInfo',
    name: 'MoreInfoPage',
    component: MoreInfoPage
  },
  {
    path: '/license',
    name: 'LicensePage',
    component: LicensePage
  },
  {
    path: '/documentInfo',
    name: 'DocumentPage',
    component: DocumentPage
  },
  {
    path: '/photoInfo',
    name: 'PhotoInfo',
    component: PhotoInfoPage
  },
  {
    path: '/photoDocPage',
    name: 'PhotoDocPage',
    component: PhotoDocPage
  },
  {
    path: '/takePhoto',
    name: 'PhotoPage',
    component: TakePhotoPage
  },
  {
    path: '/confirmInfo',
    name: 'ConfirmationPage',
    component: ConfirmationPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
