import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Daniel',
  gender: 'male',
  age: 36,
  address: 'Almeria, España',
};
const client2 = {
  name: 'Fabi',
  gender: 'female',
  age: 5,
  address: 'SS, Cuba',
};
@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  //i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //toogle para cambiar el cliente
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  });
  clients = signal([
    'Marina',
    'Nesty',
    'Beatriz',
    'Leonardo',
    'Vitico',
    'Tania',
    'Carlos',
    'Evian',
  ]);

  //Borrar cliente
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  person = {
    name: 'Daniel',
    age: 36,
    address: 'Almeria, España',
    profession: 'Software Engineer',
  };

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 1500);
  });

  //Async Pipe con Observable
  myObservableTime = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap: ', value)),
  );
}
