import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthtService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authService: AuthtService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
    .append('Authorization' , `Bearer ${this.authService.getToken()}`);
    const modifiedReq = req.clone({headers});
    return next.handle(modifiedReq);

  }

}
