const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const diaryRoute = require('./diary.route');
const diaryGroupRoute = require('./diary-group.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/diary',
    route: diaryRoute,
  },
  {
    path: '/diary-group',
    route: diaryGroupRoute,
  },
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
