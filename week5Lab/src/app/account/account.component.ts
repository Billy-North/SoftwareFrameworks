import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


import { Router } from '@angular/router';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = ''
  //routesubscription: Subscription

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    // this.routesubscription = this.route.paramMap.subscribe(params => {
    //   this.email = params.get('email');
    // });
    let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    if (!user) {
      this.router.navigateByUrl('/login')
    }
    


  }

  ngOnDestroy() {
    //this.routesubscription.unsubscibe();
  }

}
