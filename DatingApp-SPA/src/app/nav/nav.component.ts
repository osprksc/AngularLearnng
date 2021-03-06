import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
login() {
  this.authService.login(this.model).subscribe(next => {
    console.log('Login is successfull');
  }, error => {
      console.log('failed to login');
  });
  console.log(this.model);
}

}
