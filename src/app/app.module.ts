import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { httpInterceptorProviders } from "./http-interceptors";
import { GetTokenService } from "./serviceApi/get-token.service";
import { MessageService } from "./serviceApi/message.service";

// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    GetTokenService,
    httpInterceptorProviders, // 注入拦截器桶(一个数组)
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
