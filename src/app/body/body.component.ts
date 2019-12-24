import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatTable } from '@angular/material';
import { Data } from '@angular/router';

export interface PeriodicElement {
  name: string;
  count: number;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'Apple', count:2}
// ];
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
    // obj:any = {};
    name: string = "";
    count: number ;
    displayedColumns: string[] = ['name','count'];
    data: PeriodicElement[] = [];
    dataSource : PeriodicElement[];

    @ViewChild(MatTable,{static:true})table:MatTable<any>;
  

  constructor( private dataServ: DataService) { }

  ngOnInit() {
      
    // console.log(ELEMENT_DATA)
  }
  fnAdd($event){
    this.data.push({name: this.name,count:this.count});
    console.log(this.data);
    this.dataSource = [...this.data];
    console.log("service object",this.dataServ.daobj);
    console.log("datasourse",this.dataSource);
  }



    // this.dataServ.daobj.push({name:this.name,
    //   count:this.count});
    // this.dataServ.fn_get().subscribe(res=>{
    //   this.dataSource=res
    // });
    // this.dataServ.dataobj.push(this.obj);
    // this.dataSource.push({
    //   name:this.dataServ.dataobjs.name,
    //   count:this.dataServ.dataobjs.count});
    // console.log("element data",ELEMENT_DATA);
    
  

}

