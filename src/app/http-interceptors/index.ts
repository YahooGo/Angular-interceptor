/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './noop-interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    // 此处是拦截器数组 ---> 可以是多个
    // provide 注入令牌
    // useClass 拦截器
    // multi 如果为true 多重提供商令牌，注入一个多值的数组，而不是单一值
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];


// 桶 ==》 封装所有拦截器并安排顺序，暂时不懂

/**
 * rxjs 常用的管道操作符
 * 操作符文档 
 * do -> tap
 * catch -> catchError
 * switch -> switchAll
 * finally -> finalize
 * 
 * V6 管道操作符 位置rxks/operators 下面
 * 
 * map 类似 Array.map 返回新数组，数组中的原始数组元素调用函数处理后的值，按袁术数组元素顺序依次处理数组
 * mergeMap 和map类似，必须返回一个Observable
 * reduce 只返回最后的值
 * 
 * filter 返回过滤后的数据
 * partition 返回两个Observables[0]符合断言,[1]不符合断言
 * 
 * pairwise() 将当前值和前一个值作为数组放在一起，然后将其发出
 * 
 * min, max, count 都可以接收一个函数作为参数
 * 
 * distinct(lambda) 如果源发出的值在以前发送过，就会跳过该值
 * 
 * distinctUntilChanged([(Prev,current) => {}])和distinctUntilKeyChanged(key)返回Observable,发与前一项不相同的项
 * 
 * elementAt(index: number)只发出第n个值，然后完成，从0开始
 * 
 * ignoreElements() 忽略源发送的所有项，值传递complete或error
 * 
 * skip(count: Number), skipLast(count: number), skipWhile(lambbda)
 * skip 跳出源发出的前N个值
 * skipLast 跳过源最后发出的N个值
 * skipWhile 跳过lambda返回true的值
 * 
 * take(count: number), takeLast(count: number), takeUntil(notifier:Observable), takeWhile(lambda)
 * take 接收源，最初的N个值
 * takeLast 接收源最后N个值
 * takeUntil notifier 发出值，源断流
 * takeWhile lambda 返回true， 才发出源的值
 * 
 * throttle(lambda: Observable) 和 throttleTime(number) 先发出最新的值，在忽略
 * 
 * audit(lambda: Observable )和auditTime(number)先忽略，在发出最新的值
 * 
 * debounce(lambda: Observable)和 debounceTime(number)延时发送源发出的值，如果期间源发出了新的值，返回的值为最新的值，上一个就会被丢弃
 * 
 * sample(Observable) 和 sampleTime(number) 在周期时间间隔内发出源最新值。
 * 
 * find 和 findIndex
 * 

 */






















