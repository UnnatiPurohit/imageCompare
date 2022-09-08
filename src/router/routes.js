import { createRouter,createWebHistory } from 'vue-router';

export function ImageCompar(view) {
  return () => import(`@/views/${view}`);
}

const routes=[
  
      
      {
        name: "ImageComparisonList", 
        component: ImageCompar("imageCompare/ImageComparisonList.vue"),
        path: "/",
      },
    
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});


export default router;