const events = [
  {
    title: 'Эксклюзивный вечер с шеф-поваром',
    time: '10.11/19:00 ',
    desc: ' 10 ноября в 19:00 приглашаем вас на эксклюзивный ужин с нашим шеф-поваром, где вы сможете насладиться мастерством его кулинарного искусства и изысканной дегустацией вин, подобранных нашим сомелье',
    image: require('../images/background/povar.png'),
    id: 1,
  },
  {
    title: 'Путешествие вкусов',
    time: '15.11/21:00',
    desc: '15 ноября в 21:00 мы приглашаем вас на вечер, полный итальянских вкусов и мелодий, где каждое блюдо и каждая нота перенесут вас в атмосферу уютных улочек и солнечных пейзажей Италии',
    image: require('../images/background/pasta.png'),
    id: 2,
  },
  {
    title: 'Кулинарный мастер-класс для пар',
    time: '19.11/20:00',
    desc: '19 ноября в 20:00 приглашаем вас на романтический вечер, где вы вместе с вашим партнёром сможете научиться готовить изысканные блюда под руководством нашего шеф-повара, превращая кулинарию в искусство любви.',
    image: require('../images/background/couple.png'),
    id: 3,
  },
  {
    title: 'Кинематографический вкус',
    time: '12.12/18:00',
    desc: '12 декабря в 18:00 присоединяйтесь к нам на уникальный ужин с показом культовых фильмов, где каждое блюдо вдохновлено мировым кинематографом, создавая незабываемое сочетание вкусов и визуальных впечатлений.',
    image: require('../images/background/popcorn.png'),
    id: 4,
  },
  {
    title: 'Вечер с тайным гостем',
    time: '15.12/21:00',
    desc: "15 декабря в 21:00 в нашем ресторане состоится уникальное мероприятие 'Вечер с Тайным Гостем', где среди вас будет знаменитость, чья личность останется загадкой до самого конца вечера, обещая вам вечер полный интриги и неожиданных открытий!",
    id: 5,
    type: 'decor-one',
  },
  {
    title: 'Лотерея',
    time: '25.12 / 18:00',
    desc: 'Эта лотерея представляет собой увлекательное мероприятие, которое не только добавит азарта вашему вечеру, но и позволит гостям выиграть уникальные призы, связанные с кулинарией и вашим рестораном.',
    id: 6,
    type: 'decor-two',
  },
];
export default events;
