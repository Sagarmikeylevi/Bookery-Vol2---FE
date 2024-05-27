const apiURL = 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  REGISTER: `${apiURL}/user/register`,
  LOGIN: `${apiURL}/user/login`,
  GET_ALLBOOKS: `${apiURL}/book/getbooks`,
};

export const LOGIN_DETAILS = {
  TYPE: 'Login',
  TITLE: 'Hey, hello',
  SUB_TITLE: 'Enter your login credentials',
  FOOTER_MESSAGE: `Don't have an account?`,
};

export const REGISTER_DETAILS = {
  TYPE: 'Registation',
  TITLE: 'Create your account',
  SUB_TITLE: `Let's get started your reading journey`,
  FOOTER_MESSAGE: `Already have an account?`,
};

export const BOOK_DEATILS = {
  imageURLPrefix: 'http://localhost:8000/uploads/images',
};

export const GENRES = [
  {
    name: 'Horror',
    img: 'https://img.freepik.com/premium-photo/dark-horror-old-house-scary-atmosphere-fantastic_717440-583.jpg',
  },
  {
    name: 'Adventure',
    img: 'https://travelnancy.com/wp-content/uploads/2019/12/adventure1.jpeg',
  },
  {
    name: 'Self-Help',
    img: 'https://www.hinduamerican.org/wp-content/uploads/2021/05/meditation-4671083_1920-1-e1621445829977.jpg',
  },
  {
    name: 'Fantasy',
    img: 'https://wallpapercave.com/wp/wp5336680.jpg',
  },
  {
    name: 'Drama',
    img: 'https://d279m997dpfwgl.cloudfront.net/wp/2017/07/0727_romeojuliet.jpg',
  },
  {
    name: 'Thriller',
    img: 'https://wallpaperaccess.com/full/1627626.jpg',
  },
];

export const AUTHORS = [
  {
    name: 'William Shakespeare',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
  },
  {
    name: 'Agatha Christie',
    img: 'https://freebooksummary.com/wp-content/uploads/2018/08/Agatha3.jpg',
  },
  {
    name: 'J.K. Rowling',
    img: 'https://www.thefocustrust.com/wp-content/uploads/2020/06/jk-rowling-111.jpeg',
  },
  {
    name: 'Dan Brown',
    img: 'https://www.thefamouspeople.com/profiles/images/dan-brown-3.jpg',
  },
  {
    name: 'Stephen King',
    img: 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.thepitchkc.com/content/uploads/2019/07/stephen_king_coming_to_boulder.png',
  },
];
