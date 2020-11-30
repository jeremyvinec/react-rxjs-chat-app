
import * as express from 'express';
import * as bodyParser from 'body-parser';
const cors = require('cors');
require('dotenv').config();
import api from './api/index';
import { success } from './utils/logger';

// Instantiation du framework express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Instantiation du routeur
export const appRouter = express.Router();
// Autorisation des CORS sur l'API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(appRouter);

// Configuration de body-parser afin de récupérer les paramètres POST
appRouter.use(bodyParser.urlencoded({ extended: true }));

// On "sert" les fichiers présents dans le dossier "static", comme les images
appRouter.use('/static', express.static('static'));

const server = require('http').createServer(app);

export const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('save-message', (data) => {
    console.log('save-message', data);
    socket.emit(data);
  });
});

export default () => {
  app.listen(PORT, () => {
      // On fait écouter notre serveur sur le port 8080 et on passe un callback
      // exécuté lorsque le serveur est prêt à recevoir des requêtes.
      success(`Serveur démarré ! ${PORT}`);
      api();

  });
  server.listen(4000, () => {
    console.log('listening on *:4000');
  });
};
