import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Transition from './views/Transition.vue';
import Tran2 from './views/Tran2.vue';
import Tran3 from './views/Tran3.vue';
import Tran5 from './views/Tran5.vue';
import Tran6 from './views/Tran6.vue';
import Traninout from './views/Traninout.vue';
import Trancom from './views/Trancom.vue';
import Tranlist from './views/Tranlist.vue';
import Tranlist2 from './views/Tranlist2.vue';
import Tranlist3 from './views/Tranlist3.vue';
import Tran7 from './views/Tran7.vue';
import Tran8 from './views/Tran8.vue';
import Tran9 from './views/Tran9.vue';
import Tran10 from './views/Tran10.vue';
import Tran11 from './views/Tran11.vue';
import Tran12 from './views/Tran12.vue';
import Tran13 from './views/Tran13.vue';
import Directive1 from './views/Directive1.vue';
import Directive2 from './views/Directive2.vue';
import Render1 from './views/Render1.vue';
import Render2 from './views/Render2.vue';
import Render3 from './views/Render3.vue';
import Render5 from './views/Render5.vue';
import Render6 from './views/Render6.vue';
import Todo from './views/Todo.vue';
import Typescript from './views/Typescript.vue';
import Router1 from './views/Router1.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tran',
      name: 'tran',
      component: Transition,
    },
    {
      path: '/tran2',
      name: 'tran2',
      component: Tran2,
    },
    {
      path: '/tran3',
      name: 'tran3',
      component: Tran3,
    },
    {
      path: '/tran5',
      name: 'tran5',
      component: Tran5,
    },
    {
      path: '/tran6',
      name: 'tran6',
      component: Tran6,
    },
    {
      path: '/tran7',
      name: 'tran7',
      component: Traninout,
    },
    {
      path: '/tran8',
      name: 'tran8',
      component: Trancom,
    },
    {
      path: '/tran9',
      name: 'tran9',
      component: Tranlist,
    },
    {
      path: '/tran10',
      name: 'tran10',
      component: Tranlist2,
    },
    {
      path: '/tran11',
      name: 'tran11',
      component: Tranlist3,
    },
    {
      path: '/tran12',
      name: 'tran12',
      component: Tran7,
    },
    {
      path: '/tran13',
      name: 'tran13',
      component: Tran8,
    },
    {
      path: '/tran15',
      name: 'tran15',
      component: Tran9,
    },
    {
      path: '/tran16',
      name: 'tran16',
      component: Tran10,
    },
    {
      path: '/tran17',
      name: 'tran17',
      component: Tran11,
    },
    {
      path: '/tran18',
      name: 'tran18',
      component: Tran12,
    },
    {
      path: '/tran19',
      name: 'tran19',
      component: Tran13,
    },
    {
      path: '/d1',
      name: 'd1',
      component: Directive1,
    },
    {
      path: '/d2',
      name: 'd2',
      component: Directive2,
    },
    {
      path: '/r1',
      name: 'r1',
      component: Render1,
    },
    {
      path: '/r2',
      name: 'r2',
      component: Render2,
    },
    {
      path: '/r3',
      name: 'r3',
      component: Render3,
    },
    {
      path: '/r5',
      name: 'r5',
      component: Render5,
    },
    {
      path: '/r6',
      name: 'r6',
      component: Render6,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/ts',
      name: 'ts',
      component: Typescript,
    },
    {
      path: '/r8',
      name: 'r8',
      component: Router1,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
