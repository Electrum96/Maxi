import { COLORS } from "../styles/variables";

const headers = [
  {
    icon: 'bars',
    title: '',
    iconTwo: 'shopping-cart',
    classHeader: 'book',
    route: 'Main',
    color: COLORS.yellow,
    
  },
  {
    icon: 'arrow-left',
    title: 'Корзина',
    iconTwo: false,
    classHeader: 'bag',
    route: 'Book',
    color: COLORS.dark,
  
  },
  {
    icon: 'arrow-left',
    title: 'Table reservation',
    iconTwo: false,
    classHeader: 'broning',
    route: 'Main',
    color: COLORS.yellow,
   

  },
  {
    icon: 'arrow-left',
    title: 'Sport broadcasts',
    iconTwo: false,
    classHeader: 'sport',
    route: 'Main',
    color: COLORS.yellow,
  
  },
  {
    icon: 'arrow-left',
    title: 'Contacts',
    iconTwo: false,
    classHeader: 'information',
    route: 'Main',
    color: COLORS.yellow,
   
  },
  {
    icon: 'arrow-left',
    title: 'Table reservation',
    iconTwo: false,
    classHeader: 'heart',
    route: 'Broning',
    color: COLORS.dark,
   
  },
  {
    icon: 'arrow-left',
    title: 'Заказы',
    iconTwo: false,
    classHeader: 'empty-bag',
    route: 'Main',
    color: COLORS.dark,
    
  },
  {
    icon: 'arrow-left',
    title: '',
    iconTwo: false,
    classHeader: 'plate',
    route: 'Book',
    color: COLORS.dark,
    
  },
];

export default headers;
