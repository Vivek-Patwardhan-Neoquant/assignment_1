import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const tempGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('token')){
    console.log("temp activated.");
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};
