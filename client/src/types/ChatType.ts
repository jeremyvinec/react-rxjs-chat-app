export interface Chat {
    room: string;
    nickname: string;
    message: string;
}

export interface ChatServiceParams {
  url: string;
  data: any; // ChatServiceDataParams
}

export interface ChatServiceDataNull {
  url: string;
  data: {};
}

export interface ChatServiceDataParams {

}
