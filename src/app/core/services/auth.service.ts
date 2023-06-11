import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthtService{
  private token = 'MyFakeToken';

  getToken(): string{
    return this.token;
  }
}
