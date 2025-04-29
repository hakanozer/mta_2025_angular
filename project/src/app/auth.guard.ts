import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiService } from './services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  const loginStatus = token ? true : false;
  if (!loginStatus) {
    window.location.replace('/');
  }
  inject(ApiService).profileMe().subscribe({
    next: (res) => {
      console.log(res)
    },
    error: (err) => {
      console.log(err)
      localStorage.removeItem('access_token');
      window.location.replace('/');
    }
  })
  return loginStatus
};
