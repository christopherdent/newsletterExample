// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, throwError as observableThrowError } from "rxjs";

// @Injectable()
// export class HttpErrorsInterceptor implements HttpInterceptor{
// constructor(){}

// intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
// ): Observable<HttpEvent<any>> {

// req=req.clone({
//     setHeaders: {
//         'Authorization' : 'c1c36db0-1bdf-11ec-bc70-3ba4acafe2c5'
//     }
// })


//     // return next.handle(req).pipe(
//     //     catchError((err) => {
//     //         console.log(err);
//     //         return observableThrowError(err);
//     //     })
//     // )
// }

// }