import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ComponentserviceService {

  constructor(private http: HttpClient) {}
  getAllComponents() {
     // return this.http.get('https://connectors-3361.restdb.io/rest/connectors?apikey=5b9f690f6e310a4351fdc0f4');
     return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  addComponent(newComponentDetails) {
    return this.http.post('https://connectors-3361.restdb.io/rest/connectors', JSON.stringify(newComponentDetails), {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-apikey': '5b9f690f6e310a4351fdc0f4'
      })
    });
  }

  getAComponent(id) {
    return this.http.get('https://connectors-3361.restdb.io/rest/connectors/' + id, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-apikey': '5b9f690f6e310a4351fdc0f4'
      })
    });
  }

}
