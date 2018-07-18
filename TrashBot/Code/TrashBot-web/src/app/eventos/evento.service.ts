import {Injectable} from '@angular/core';
import {Evento} from './evento';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EventoService {


    private apiUrl = 'http://localhost:3000';


    constructor(private http: Http) {
    }

    /* findById(id: number): Observable<Pais> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('xAuthToken'),
            'initToken': localStorage.getItem('xInitToken')
        });

        return this.http.get(this.apiUrl + '/' + id, { headers: headers })
            .map((res: Response) =>  {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json()));
    } */

    saveEvento(evento: Evento): Observable<Evento> {

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        });

   
        return this.http.post(this.apiUrl + '/api/v1/eventos/', evento, { headers: headers })
            .map((res: Response) =>  {
                debugger;
               // localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.json()));

    }

/*     deletePaisById(id: number): Observable<boolean> {
        let headers = new Headers ({
         'Content-Type': 'application/json',
         'Authorization' : localStorage.getItem('xAuthToken'),
         'initToken': localStorage.getItem('xInitToken')
       });

       return this.http.delete(this.apiUrl + '/delete/' + id,{headers: headers})
            .map((res: Response) =>  {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    } */

/*     updatePais(pais: Pais): Observable<Pais> {
      let headers = new Headers ({
       'Content-Type': 'application/json',
       'Authorization' : localStorage.getItem('xAuthToken'),
       'initToken': localStorage.getItem('xInitToken')
      });

        return this.http.put(this.apiUrl +'/update', pais,{headers: headers})
        .map((res: Response) =>  {
            localStorage.setItem('xInitToken', res.headers.get('initToken'));
            return res;
        })
            .catch((error: any) => Observable.throw(error.json()));

    }
 */
/*     findAll(): Observable<Pais[]> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('xAuthToken'),
            'initToken': localStorage.getItem('xInitToken')
        });

        return this.http.get(this.apiUrl + '/listado', { headers: headers })
            .map((res: Response) => {
                localStorage.setItem('xInitToken', res.headers.get('initToken'));
                return res.json();
            }
        )
            .catch((error: any) => Observable.throw(error.json()));
    }
 */
}
