//An index file that returns a function that attaches all your routes to your app your routes will be defined in routes.js
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_05/routes/index.js

import router from './routes.js';

const constructorMethod = (app) => {
  app.use('/', router);

  app.use('*', (req, res) => {
    res.status(404).json({error: 'Not found'});
  });
};

export default constructorMethod;
