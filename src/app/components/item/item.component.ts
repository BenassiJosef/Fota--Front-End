import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Item} from '../../interfaces/item';
import {ItemsService} from "../../services/items.service";
import {Observable} from 'rxjs/Rx';
import {Angular2TokenService} from "angular2-token";
import {CommonModule } from '@angular/common';  
import {Router} from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Item[];
  mode = "Observable";
  errorMessage: string;

  constructor(private itemService: ItemsService, public authTokenService:Angular2TokenService,private router:Router) { }

  ngOnInit() {

    let timer =Observable.timer(0,5000);
    timer.subscribe(() => this.getItems());
  }

  getItems(){
    
      this.itemService.getHires().subscribe(item => this.item = item, error => this.errorMessage = <any>error);
    
 }

 addToBasket(item:string){

  alert(item+" added to basket!");

 }
}