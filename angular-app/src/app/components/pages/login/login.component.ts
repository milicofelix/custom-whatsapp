import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
      'email': 'milicofelix@gmail.com',
      'password': 'morango123'
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  submit(){
    this.http.post('http://localhost:8000/api/login',this.credentials)
        .subscribe((data) => {
          this.router.navigate(['categories/list'])
        });
    return false;
  }

}
