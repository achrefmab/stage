import { Component, OnInit } from '@angular/core';
import { Order } from '../model/Order.model';
import { Router, ActivatedRoute } from '@angular/router';
import {OrderService} from '../services/order.service';
import { CaddyService } from '../services/caddy.service';

declare const openCity: any;
declare const plusSlides: any;
declare const currentSlide: any;
declare const showSlides: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAmount:number;
  currentOrder:Order;
  public mode:number;
  constructor(private router:Router, private route:ActivatedRoute,
              public caddyService:CaddyService,
              private orderService:OrderService) { }

  ngOnInit() {
    let id=this.route.snapshot.params.orderID

    this.orderService.getOrder(id).subscribe(data=>{
      this.currentOrder=data;
    },err=>{
      console.log(err);
    })
  }

  onParOrder(data) {
    console.log(data);
    this.caddyService.emptyCaddy();
  }
  Payer() {
    this.router.navigateByUrl("/categorie");
    this.caddyService.emptyCaddy();
  }
  onClick1() {
    openCity();
  }
  onClick2() {
    plusSlides();
  }
  onClick3() {
    currentSlide();
  }
  onClick4() {
    showSlides();
  }
}
