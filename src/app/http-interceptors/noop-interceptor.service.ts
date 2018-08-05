import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, finalize, mergeMap, catchError, filter, retry } from 'rxjs/operators';
import { MessageService } from "../serviceApi/message.service";


/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(private messenge: MessageService) {}

  // 内置 intercept 函数，两个参数：请求体，发射函数。
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log('第一章发起的请求', req);

    // 判断token 是否存在于缓存中，存在使用，不存在不用区别登陆拉去（登陆时存本地sessionStorage中）
    let token = sessionStorage.token ? sessionStorage.token : '';
    // 记录开始时间 --可删除
    const started = Date.now();
    // 字符串用于判定请求成功与否
    let ok: string;
    // 设置header 
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    // const authReq = req.clone({ setHeaders: { Authorization: 'Bearer 123' } });
    // 返回一个观察者对象通过next.handle()发射到下一个中间件

    // 华丽分割线： 上方：设置request参数通过req的clone方法。 
    // 华丽分割线： 下方：设置request参数通过req的clone方法。 

    return next.handle(authReq)
    // 因为是观察者对象所以声明管道将数据处理统一后返回
      .pipe(
        // 断线重连3次
        retry(3),
        // 数据处理
        map((event: any) => {

          console.log('数据：', event)
          console.log('参数1：', event instanceof HttpResponse)

          // 此处会多次运行 ----- 暂时不明白
          if (event instanceof HttpResponse && event.body.code == 200) {
            // 此处模拟返回状态失败后重定向 含return
            console.log('重定向到登陆')
            // return 
          }

          // 返回处理参数 
          return event;
        }),
        // 错误处理
        catchError((res: HttpResponse<any>) => {
          console.log('第三章错误处理',res)
          switch (res.status) {
            case 401:
              // 权限处理
              location.href = ''; // 重新登录
              break;
            case 200:
              // 业务层级错误处理
              console.error('业务错误', `错误代码为：${res.body.code}`);
              break;
            case 404:
              console.error('404', `API不存在`);
              break;
          }
          // 以错误的形式结束本次请求
          return Observable.throw(res);

        }),
        // 侦听属性不影响处理流程，success回调和error回调用来追踪是否试成功或失败操作
        tap( 
          // Succeeds when there is a response; ignore other events
          (event) => {ok = event instanceof HttpResponse ? 'succeeded' : '' , console.log('ok=>'+ ok), console.log('参数tap=>', event instanceof HttpRequest)},
          // Log when response observable either completes or errors
          (error) => {ok = 'failed'}
        ),
        // 最终结束后返回
        finalize(() => {
          console.log('第四章监听最后操作start')
          const elapsed = Date.now() - started;
          const msg = `${req.method} -- "${req.urlWithParams}" --
          ${ok} -- in ${elapsed} ms.`;
          console.log('最终章返回值：', msg)
          // 此处应该有日志收集，无论成功或者失败此处都要运行
          this.messenge.add(msg);
          
        })
      )
  }
}