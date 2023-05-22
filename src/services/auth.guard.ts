import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot)
  : boolean | UrlTree | Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> => {
  const router: Router = inject(Router);
  // let loginToken = localStorage.getItem("token");
  // console.log('from Auth -- '+loginToken);
  // if (loginToken != ''){
  //   router.navigate(['/dashboard']);
  //   return true;
  // }
  // else{
  //   router.navigate(['/login']);
  //   return false;
  // }
  return true;
};
