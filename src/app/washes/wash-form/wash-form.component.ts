import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { Washes } from 'src/app/models/washes.type';

@Component({
  selector: 'app-wash-form',
  templateUrl: './wash-form.component.html',
  styleUrls: ['./wash-form.component.scss']
})
export class WashFormComponent implements OnInit {
  wash!: Washes;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Washes,
    public dialogRef: MatDialogRef<WashFormComponent>,
  ){}

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
