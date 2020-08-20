import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  birthdate: string; 
  age: number; 
  email: string;

  editEmail = ""
  editBirthdate = ""
  editUsername = ""
  editAge: number

  constructor(private router: Router) { }

  ngOnInit(): void {
    // let user = JSON.parse(sessionStorage.getItem('user'))
    // this.username = user.username
    // this.birthdate = user.birthdate
    // this.age = user.age
    // this.email = user.email
    // if (!user) {
    //   this.router.navigateByUrl('/login')
    // }
    let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    if (!user) {
      this.router.navigateByUrl('/login')
    }
    this.username = user.username
    this.birthdate = user.birthdate
    this.age = user.age
    this.email = user.email
    
  }

  setUsername() {
    this.username = this.editUsername
    const newUser = { username: this.username, birthdate: this.birthdate,age: this.age,email: this.email }
    sessionStorage.setItem('user',JSON.stringify(newUser))
  }

  setAge() {
    this.age = this.editAge
    const newUser = { username: this.username, birthdate: this.birthdate,age: this.age,email: this.email }
    sessionStorage.setItem('user',JSON.stringify(newUser))
  }

  setBirthdate() {
    this.birthdate = this.editBirthdate
    const newUser = { username: this.username, birthdate: this.birthdate,age: this.age,email: this.email }
    sessionStorage.setItem('user',JSON.stringify(newUser))
  }

  setEmail() {
    this.email = this.editEmail
    const newUser = { username: this.username, birthdate: this.birthdate,age: this.age,email: this.email }
    sessionStorage.setItem('user',JSON.stringify(newUser))
  }

}

