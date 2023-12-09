import { Component } from '@angular/core';
import { resolve } from 'path';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect

  public name: string = 'Facundo';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }


  //i18nPlural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Facundo', 'Manuel', 'Raul'];
  public clientsMap = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.pop();
  }


  //KeyValue Pipe
  public person = {
    name: 'Facundo',
    age: 24,
    address: 'new york 1234'
  }


  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value)
    ));


  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500)
  })

}
