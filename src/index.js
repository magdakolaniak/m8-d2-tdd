import server from './server.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.ATLAS_URL + '/prd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(port, () => {
      console.log('Server listening on port ' + port);
    });
  });
