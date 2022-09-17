import { Component } from '@angular/core';
import { Washes } from 'src/app/models/washes.type';

const FAKE_DATA: Washes[] = [
  { 
    id: 1, 
    vehicle: 'Fiesta Branco', 
    startTime: '07:00', 
    endTime: '08:00', 
    price: 50 
  },
  {
    id: 2,
    vehicle: 'Gol Prata',
    startTime: '08:00',
    endTime: '09:00',
    price: 50.00
  },
  {
    id: 3,
    vehicle: 'Ideia Prata',
    startTime: '10:00',
    endTime: '11:00',
    price: 50.00
  },
  {
    id: 4,
    vehicle: 'R3 Branca',
    startTime: '11:00',
    endTime: '12:00',
    price: 40.00
  },  
  {
    id: 5,
    vehicle: 'CG Azul',
    startTime: '12:00',
    endTime: '13:00',
    price: 40.00
  },
  {
    id: 6,
    vehicle: 'R3',
    startTime: '11:00',
    endTime: '12:00',
    price: 40.00
  }
];

@Component({
  selector: '   wash-list',
  templateUrl: './wash-list.component.html',
  styleUrls: ['./wash-list.component.scss']
})
export class WashListComponent {

  displayedColumns: string[] = [
    'id',
    'vehicle',
    'startTime',
    'endTime',
    'price',
    'actions'
  ];
  data = FAKE_DATA;
}
