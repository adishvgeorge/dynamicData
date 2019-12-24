import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface UsersData {
  name: string;
  id: number;
  profit: number;
  period: number;
}


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  action:string;
  local_data:any;
  // public obj: any = {};
  // public fieldArray: Array<any> = [];

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
      console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
     }

  ngOnInit() {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

    // addValue() {
    //     this.fieldArray.push(this.obj);
    //     console.log(this.fieldArray);
    //     this.obj = {};
    // }

}
