import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class WebserverService {
  constructor(private db: AngularFireDatabase) {}
}