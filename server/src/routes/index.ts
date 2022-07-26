import express from 'express';
import authRoute from './AuthRoute';
import propertyRoute from './PropertyRoute';

const router = express.Router();

const allRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/property',
    route: propertyRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
