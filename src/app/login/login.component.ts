import { Component, OnInit } from '@angular/core';
import { GetTokenService } from "../serviceApi/get-token.service";
import { MessageService } from "../serviceApi/message.service";

// import { HttpUtils2Service } from "../request/http-utils2.service";
// import { HttpUtils3Service } from "../request/http-utils3.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:number;
  messages: any[] = [];
  constructor(
    private tokenS: GetTokenService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  
  login() {
    // 正确的url
    let url= `/api/mock/15100/Angular/getToken?username=${this.username}&password=${this.password}`;
    // 错误的url
    // let url= `/api`;
    let parma = {
      username: this.username,
      password: this.password
    };
    
    if(!this.username || !this.password){return }
    this.tokenS.getToken(url).subscribe(data=>{console.log('adasdasdas',data)})
    this.messages = this.messageService.messages
  }

}
