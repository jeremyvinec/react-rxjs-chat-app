import { of, fromEvent } from 'rxjs';
import { map, switchMap, mergeMap, takeUntil } from 'rxjs/operators';
const io = require('socket.io');
import server from '../index';

// Initialise Socket.IO and wrap in observable
const io$ = of(io(server));

// Stream of connections
const connection$ = io$
  .pipe(
    switchMap((io: any) =>
      fromEvent(io, 'connection')
        .pipe(
          map((client: any) => ({ io, client }))
        )
    )
  );

// Stream of disconnections
const disconnect$ = connection$
  .pipe(
    mergeMap(({ client }: any) =>
      fromEvent(client, 'disconnect')
        .pipe(
          map(() => client)
        )
    )
  );

// On connection, listen for event
function listenOnConnect(event: any) {
  console.log('listenOnConnect', event)
  return connection$
    .pipe(
      mergeMap(({ io, client }: any) =>
        fromEvent(client, event)
          .pipe(
            takeUntil(
              fromEvent(client, 'disconnect')
            ),
            map((data: any) => ({ io, client, data }))
          )
      )
    );
}

export {
  connection$,
  disconnect$,
  listenOnConnect
};
