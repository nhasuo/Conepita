import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Model from '../shared/model'
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  idname: string = "";
  passname: string = "";
  alert: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const auth: Model.LoginRequest={
      id: this.idname,
      password: this.passname
    }
    this.commonService.login(auth).subscribe((res: Model.LoginResponse) =>{
      if (res.contents[0].userId === this.idname) {
        this.router.navigate(['diagnosis/page/']);
      } else{
        this.alert = true;
      }
    })
    return true;
  }

 
}
