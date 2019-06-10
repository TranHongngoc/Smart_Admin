import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {JsonApiService} from "../../core/api/json-api.service";

@Injectable()
export class EmployeeService {
    private URL = 'http://localhost:8080/employees';

    constructor(private http: HttpClient) {
    }

    // constructor(private jsonApiService: JsonApiService) {
    // }
    //
    // getEmployees(): Observable<Employee[]>{
    //     return this.jsonApiService.fetch('http://localhost:8080/employees')
    // }

    getEmployees(count = -1): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.URL).pipe(
            map(response => response.filter((post, i) => i > count))
        );
    }
}