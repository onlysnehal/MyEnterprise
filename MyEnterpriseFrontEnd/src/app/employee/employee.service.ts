import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import { Http, Response } from "@angular/http";
import { error } from 'util';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

  private apiUrl = "http://localhost:8080/employee/list";

  constructor(private http: Http) { }

  findAll(): Observable<Employee[]> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
