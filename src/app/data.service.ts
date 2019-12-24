import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { of } from 'rxjs';
import { PeriodicElement } from './body/body.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataobj:any = [];
  public daobj:any = [{}];

  ngOnInit(): void {
    console.log("service dataobj",this.dataobj);
  }

  // constructor(public data: PeriodicElement) { 
  //   // this.daobj = data;
  // }

  fn_get():Observable<any>{
    // return of(data:this.daobj);
    // return data:this.daobj
    return of(this.daobj);
    // return Observable.of(this.languages);
   
}
}