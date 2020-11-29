export const config: any = {
  room: {
    name: 'room',
    label: 'ROOM',
    placeholder: 'room',
    message: 'Veuillez saisir un nom',
    defaultValue: 'chat',
    secureTextEntry: false,
    required: true
  },
  nickname: {
    name: 'nickname',
    label: 'NICKNAME',
    placeholder: 'nickname',
    message: 'Veuillez saisir votre surnom',
    defaultValue: 'jeremyvinec',
    secureTextEntry: false,
    required: true
  },
};

export const initialState = {
  room: 'room',
  nickname: 'jeremyvinec'
};