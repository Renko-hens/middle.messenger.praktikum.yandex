import { mapContext } from './constants/index'; 
import login from './pages/login/index.hbs'
import registration from './pages/registration/index.hbs';
import chat from './pages/chat/index.hbs';
import profile from './pages/profile/index.hbs';
import notFound from './pages/notFound/index.hbs';
import serverError from './pages/serverError/index.hbs';
import './components/button';
import './components/input';
import './components/statusCard';

function render(html) {
  const app = document.querySelector('#app');
  app.innerHTML = html;
};

const ROUTES = {
  'login': login,
  'registration': registration,
  'chat': chat,
  'profile': profile,
  'notFound': notFound,
  'serverError': serverError,
};

window.goToPage = function (name) {
  const page = ROUTES[name];
  const context = mapContext[name];
  render(page(context));
};

window.addEventListener('DOMContentLoaded', () => {
  render(ROUTES.login(mapContext.login))
});