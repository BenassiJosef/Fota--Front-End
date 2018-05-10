import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private router: Router) { }

  secureHire(){

  alert(" Hire has been booked");
  this.router.navigate(['myhires']);
  }

  ngOnInit() {
  }

}
