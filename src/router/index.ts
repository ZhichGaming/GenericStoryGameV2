// router/index.ts
import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/playoptions',
    name: 'PlayOptions',
    component: () => import('../views/PlayerViews/PlayOptionsView.vue')
  },
  {
    path: '/createoptions',
    name: 'CreateOptions',
    component: () => import('../views/EditorViews/CreateOptionsView.vue')
  },
  {
    path: '/storyplayback/:storyInfoDir',
    name: 'StoryPlayBack',
    component: () => import('../views/PlayerViews/StoryPlaybackView.vue'),
    props: true
  },
  {
    path: '/editoroverview/:storyInfoDir',
    name: 'EditorOverview',
    component: () => import('../views/EditorViews/EditorOverviewView.vue'),
    props: true
  },
  {
    path: '/sceneseditor/:baseDir',
    name: 'ScenesEditor',
    component: () => import('../views/EditorViews/ScenesEditorView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router