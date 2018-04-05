import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()
export class SampleHttpService {
  constructor(private http: HttpClient) {
  }

  storeServer(servers: any[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application-json'
    });
    //return this.http.post('https://sample-angular4-app.firebaseio.com/data.json',servers,{headers})
    return this.http.put('https://sample-angular4-app.firebaseio.com/data.json', servers, {headers})//this is only for the firebase purpose to overide the existing data
  }

  getServer() {
    return this.http.get('https://sample-angular4-app.firebaseio.com/data.json')
      .map((response:HttpResponse<any[]>)=>{
          return response
      })
  }

  getAppName(){
    return this.http.get('https://sample-angular4-app.firebaseio.com/appName.json')
      .map((response:HttpResponse<any>)=>{
        return response
      })
  }
}
