import home from './pages/home/index.hbs';
import profile from './pages/profile/index.hbs';
import styles from './index.scss';
import './components/button';

function render(html) {
  const app = document.querySelector('#app');
  app.innerHTML = html;
};

const ROUTES = {
  'home': home,
  'profile': profile,
};

window.goToPage = function (name) {
  const page = ROUTES[name];
  render(page());
};

window.addEventListener('DOMContentLoaded', () => {
  render(ROUTES.home())
});