import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as CanvasJS from '../canvasjs.min';
import { DataService } from '../data.service';
import { data } from 'jquery';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public datasourseT;
  public datasourse =
   [
    { id:1, y: 450, name: "Food" , period:1 },
    { id:2, y: 120, name: "Insurance", period:3 },
    { id:3, y: 300, name: "Traveling", period:2 },
    { id:4, y: 900, name: "Housing", period:1 },
    { id:5, y: 150, name: "Education", period:3 },
    { id:6, y: 150, name: "Shopping", period:4 },
    { id:7, y: 1000, name: "Others", period:2 },
    { id:8, y: 160, name: "test", period:1 },
    
  ];

  constructor(private dataS:DataService) { }
  ngOnInit() {
    this.datasourseT = this.dataS.dataobj;
    console.log("chart",this.datasourse);
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
        dataPoints: this.datasourse
        // [
        //   { y: 450, name: "Food" },
        //   { y: 120, name: "Insurance" },
        //   { y: 300, name: "Traveling" },
        //   { y: 900, name: "Housing" },
        //   { y: 150, name: "Education" },
        //   { y: 150, name: "Shopping"},
        //   { y: 1000, name: "Others" },
          
        // ]
      }]
    });
      
    chart.render();
    // data.push(this.dataS.dataobj);
      }
  }

