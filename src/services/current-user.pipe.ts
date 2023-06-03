import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFromEmail'
})

export class CurrentUserPipe implements PipeTransform {

  nameArray:any = [];

  transform(email:any){
    for(let i=0;i<=email.length;i++){
      if(email[i] != '.' && email[i] != '@'){
        this.nameArray.push(email[i]);
      }else if(email[i] == '.'){
        this.nameArray.push(' ');
      }else{
        break;
      }
    }
    return this.nameArray.join('');
  }
}
