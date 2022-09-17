import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WashFormComponent } from './wash-form/wash-form.component';
import { WashListComponent } from '../shared/wash-list/wash-list.component';
import { Washes } from '../models/washes.type';

@Component({
  selector: 'washes',
  templateUrl: './washes.component.html',
  styleUrls: ['./washes.component.scss']
})


export class WashesComponent implements OnInit {

  constructor(
    // public dialog: MatDialog
    ) {}
  
  ngOnInit(): void {
  }


  openDialog(): void {
    // let dialogRef = this.dialog.open(WashFormComponent, { 
    //   width: '500px',
    //   height: '400px',
    // });

    // dialogRef.afterClosed()
    //   .subscribe(result => {
    //     console.log(`Dialog Result: ${result}`);
    //   });

    // dialogRef.close('Pizza!');

    console.log('clicked');
  }


}
