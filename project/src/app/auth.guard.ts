import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  const loginStatus = token ? true : false;
  if (!loginStatus) {
    window.location.replace('/');
  }
  return loginStatus
};
