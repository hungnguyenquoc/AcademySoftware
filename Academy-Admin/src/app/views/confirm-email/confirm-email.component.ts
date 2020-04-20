import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  emailConfirmed: boolean;
  urlParams: any = {};
  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.urlParams.token = this.route.snapshot.queryParamMap.get('tokenString');
    this.urlParams.userid = this.route.snapshot.queryParamMap.get('userid');
    this.confirmEmail();
  }
  confirmEmail() {
    // this.authService.confirmEmail(this.urlParams).subscribe(() => {
    //   console.log('success');
    //   this.emailConfirmed = true;
    // }, err => {
    //   this.emailConfirmed = false;
    // });
    console.log(this.urlParams);
  }
}
