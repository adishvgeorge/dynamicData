import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { AddComponent } from '../add/add.component';
import { DataService } from '../data.service';
import * as CanvasJS from '../canvasjs.min';
// import * as $ from 'jquery';
// import 'datatables.net'

export interface UsersData {
  name: string;
  id: number;
  y: number;
  period: number;
}

const ELEMENT_DATA: UsersData[] = [
  { id: 1, name: 'Hydrogen', y: 1.0079, period: 2 },
  { id: 2, name: 'Helium', y: 4.0026, period: 1 },
  { id: 3, name: 'Lithium', y: 6.941, period: 3 },
  { id: 4, name: 'Beryllium', y: 9.0122, period: 1 }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'y', 'period', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true})table:MatTable<any>;


  constructor(public dialog: MatDialog, private dataServ:DataService) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataServ.dataobj.push(this.dataSource);
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: this.dataSource
      }]
    });
      
    chart.render();
  }

  openDialog(action,obj):void {
    obj.action = action;
    const dialogRef = this.dialog.open(AddComponent, {
      width: '350px',
      height:'350',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    
    this.dataSource.push({
      id:row_obj.id,
      name:row_obj.name,
      y:row_obj.y,
      period:row_obj.period
    });


    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: this.dataSource
      }]
    });
    chart.render();


    this.table.renderRows();
    this.dataServ.dataobj.push({
      id:row_obj.id,
      name:row_obj.name,
      y:row_obj.y,
      period:row_obj.period
    });
    console.log(this.dataServ.dataobj);
  }
  

  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.y = row_obj.y;
        value.period = row_obj.period;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}






