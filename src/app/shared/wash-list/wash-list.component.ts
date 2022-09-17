import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Washes } from 'src/app/models/washes.type';
import { WashFormComponent } from 'src/app/washes/wash-form/wash-form.component';

const FAKE_DATA: Washes[] = [
  { 
    id: 1, 
    vehicle: 'Fiesta Branco', 
    startTime: '07:00', 
    endTime: '08:00', 
    price: 50,
    obs: 'cliente tal'
  },
  {
    id: 2,
    vehicle: 'Gol Prata',
    startTime: '08:00',
    endTime: '09:00',
    price: 50.00,
    obs: 'pediu pra avisar no whats'
  },
  {
    id: 3,
    vehicle: 'Ideia Prata',
    startTime: '10:00',
    endTime: '11:00',
    price: 50.00,
    obs: 'esse é doido mesmo'
  },
  {
    id: 4,
    vehicle: 'R3 Branca',
    startTime: '11:00',
    endTime: '12:00',
    price: 40.00,
    obs: '17999999999'
  },  
  {
    id: 5,
    vehicle: 'CG Azul',
    startTime: '12:00',
    endTime: '13:00',
    price: 40.00,
    obs: 'ok' 
  },
  {
    id: 6,
    vehicle: 'R3',
    startTime: '11:00',
    endTime: '12:00',
    price: 40.00,
    obs: 'cliente pediu pra entregar'
  }
];

@Component({
  selector: '   wash-list',
  templateUrl: './wash-list.component.html',
  styleUrls: ['./wash-list.component.scss']
})
export class WashListComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = [
    'id',
    'vehicle',
    'startTime',
    'endTime',
    'price',
    'actions',
    'obs'
  ];
  data = FAKE_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  openDialog(wash: Washes | null): void {
    let dialogRef = this.dialog.open(WashFormComponent, { 
      width: '350px',
      data: wash === null ? {
        id: null,
        vehicle: '',
        startTime: '',
        endTime: '',
        price: null,
        obs: '' 
      } : wash
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if(result != undefined) {
          this.data.push(result);
          this.table.renderRows();
        }
      });

    console.log('clicked');
  }
}
