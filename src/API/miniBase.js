import users from './users.json';

export const messages_GlobalRoom = [
  {author: users[0], time: '10:45', body: 'Hello Chat',},
  {author: users[1], time: '10:46', body: 'Hello!',},
  {author: users[2], time: '10:47', body: 'Этому чату нужен новый герой!',},
  {author: users[3], time: '10:48', body: 'Здесь уже есть супергерой',},
  {author: users[4], time: '10:49', body: 'Умение сражаться не делает тебя героем.',},
  {author: users[5], time: '12:46', body: 'Hello! Im Here',}
];

export const messages_VladYaro = [
  {author: users[1], time: '10:46', body: 'Го кодить',},
  {author: users[0], time: '10:47', body: 'Я сплю',},
  {author: users[1], time: '10:48', body: 'Когда свободен?',},
  {author: users[0], time: '10:49', body: 'Когда высплюсь',},
  {author: users[1], time: '10:56', body: 'Уже выспался?',},
  {author: users[0], time: '23:56', body: 'да',}
]

export const messages_VladBatman = [
  {author: users[0], time: '10:47', body: 'Привет, скока жмешь?',},
  {author: users[2], time: '10:48', body: 'сотку',},
  {author: users[0], time: '10:49', body: 'че так мало? супермен пару тонн',},
  {author: users[2], time: '10:56', body: 'он пижон',},
  {author: users[0], time: '23:56', body: 'да',}
]

export const messages_VladSuperMan = [
  {author: users[0], time: '10:47', body: 'Привет, бетмен сказал шо ты пижон',},
  {author: users[3], time: '10:48', body: 'он прав',}
]

export const messages_VladWonderWoman = [
  {author: users[0], time: '10:47', body: 'Привет, а ты любишь котиков?',},
  {author: users[4], time: '10:48', body: 'да, а ты?',},
  {author: users[0], time: '10:49', body: 'у меня двое',},
  {author: users[4], time: '10:56', body: 'у меня тоже',}
]

export const messages_VladFlash = [
  {author: users[0], time: '10:47', body: 'Привет'},
  {author: users[5], time: '11:48', body: 'Здарова',},
  {author: users[0], time: '10:49', body: 'че так долго отвечаешь?'},
  {author: users[5], time: '18:56', body: 'я бегал за хлебом',},
  {author: users[0], time: '18:56', body: 'на другую планету?',},
  {author: users[5], time: '18:56', body: 'в АТБ на Марсельской'}
]
export const crowd_ico_url = 'https://vision.org.au/campaigns/wp-content/uploads/sites/13/2018/09/crowd-icon.png';
export const dialogs = [
  {title: 'GLOBAL ROOM', dialogType: 'room', ico: crowd_ico_url, messagesArray: messages_GlobalRoom},
  {title: 'CUSTOM ROOM', dialogType: 'room', ico: null, messagesArray: null},
  {title: users[1].name, dialogType: 'user', ico: users[1].ava, messagesArray: messages_VladYaro},
  {title: users[2].name, dialogType: 'user', ico: users[2].ava,  messagesArray: messages_VladBatman},
  {title: users[3].name, dialogType: 'user', ico: users[3].ava,  messagesArray: messages_VladSuperMan},
  {title: users[4].name, dialogType: 'user', ico: users[4].ava,  messagesArray: messages_VladWonderWoman},
  {title: users[5].name, dialogType: 'user', ico: users[5].ava,  messagesArray: messages_VladFlash}
];

export const abc = 'Note that the values row and row-reverse are affected by the directionality of the flex container. If its dir attribute is ltr, row represents the horizontal axis oriented from the left to the right, and row-reverse from the right to the left; if the dir attribute is rtl, row represents the axis oriented from the right to the left, and row-reverse from the left to the right.';
