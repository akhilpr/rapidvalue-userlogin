import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from "./userData";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {
  user!: UserData;  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUserData()
  }
  // gets user data
  getUserData() {
      const data:any =  sessionStorage.getItem('userData')
      this.user = JSON.parse(data)
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate([''])

  }
}
