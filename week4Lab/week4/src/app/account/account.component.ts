import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = ''
  //routesubscription: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.routesubscription = this.route.paramMap.subscribe(params => {
    //   this.email = params.get('email');
    // });

  }

  ngOnDestroy() {
    //this.routesubscription.unsubscibe();
  }

}
