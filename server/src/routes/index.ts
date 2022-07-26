import express from 'express';
import authRoute from './AuthRoute';
import propertyRoute from './PropertyRoute';
import scrapperRoute from './ScrapperRoutes';

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
  {
    path: '/scrapper',
    route: scrapperRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
