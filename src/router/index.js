import { createRouter, createWebHistory } from 'vue-router';

import InicioView from '@/views/InicioView.vue';
import PendientesView from '@/views/PendientesView.vue';
import CompletadasView from '@/views/CompletadasView.vue';




const routes = [
  { 
    path: '/',
    name: 'inicio',
    component: InicioView,
  },
  {
    path: '/pendientes',  
    name: 'pendientes',
    component: PendientesView,
  },
  { 
    path: '/completadas',
    name: 'completadas',
    component: CompletadasView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
