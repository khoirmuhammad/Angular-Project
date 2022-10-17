import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

successAlert(message: string){
  return alertify.success(message);
}

errorAlert(message: string){
  return alertify.error(message);

}

warnAlert(message: string){
  return alertify.warning(message);
}

}
