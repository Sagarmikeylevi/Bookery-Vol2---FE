const apiURL = 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  REGISTER: `${apiURL}/user/register`,
  LOGIN: `${apiURL}/user/login`,
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
