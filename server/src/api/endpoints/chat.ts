import { appRouter, io } from '../../index';
import { Request, Response, NextFunction } from 'express';
import { error } from '../../utils/logger';
import { Chat } from '../../models/chat';

export default () => {

  // socket io
  /*io.on('connection', (socket) => {
    console.log('User connected');
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
    socket.on('save-message', (data) => {
      console.log(data);

      io.emit('new-message', { message: data });
    });
  });*/

  const saveMessage = (res) => {
    io.emit('new-message', res);
  };

  /* GET ALL CHATS */
  appRouter.get('/:room', async (req: Request, res: Response, next: NextFunction) => {
    try {

      let { room } = req.params;

      if (!chatExists(room)) {
        return res.status(404).json({
          status: 'fail',
          message: `The club ${room} does not exist.`
        });
      }

      Chat.find({ room }, (err: any, chats: any) => {
        if (err) { return next(err); }
        res.json(chats);
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  /* GET SINGLE CHAT BY ID */
  appRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    Chat.findById(req.params.id, (err: any, post: any) => {
      if (err) { return next(err); }
      res.json(post);
    });
  });

  /* SAVE CHAT */
  appRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    Chat.create(req.body, (err: any, post: any) => {
      if (err) { return next(err); }
      // return response on socket
      saveMessage(post);
      res.json(post);
    });
  });

  /* UPDATE CHAT */
  appRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    Chat.findByIdAndUpdate(req.params.id, req.body, (err: any, post: any) => {
      if (err) { return next(err); }
      res.json(post);
    });
  });

  /* DELETE CHAT */
  appRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    Chat.findByIdAndRemove(req.params.id, req.body, (err: any, post: any) => {
      if (err) { return next(err); }
      res.json(post);
    });
  });

};

export async function chatExists (room: string): Promise<boolean> {
  const chat = await Chat.findOne({ room: room });
  // Cette astuce de notation permet de convertir n'importe quelle variable javascript en true ou false selon
  // comment le JS doit l'interpréter. Cela revient à avoir le résultat d'une condition dans un "if".
  // On aurait pu aussi retourner chat !== null, mais cela pourrait potentiellement créer des bugs dans le cas
  // où le produit n'est pas trouvé mais que mongoose retourne une autre valeur, comme "undefined" ou "false".
  return !!chat;
}
