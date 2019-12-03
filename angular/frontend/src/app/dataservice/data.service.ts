import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Deposito } from './deposito';
import { Articulo } from './articulo'

@Injectable()
export class dataService {

    constructor(private http: Http) {}
    private headers = new Headers({'Content-Type': 'application/json'});

    getDepositos(): Promise<Deposito[]>{
        return this.http.get('http://127.0.0.1:8000/depositos?format=json', {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Deposito[])
    }

    getArticulos(): Promise<Articulo[]>{
        return this.http.get('http://127.0.0.1:8000/articulos?format=json', {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Articulo[])
    }

    deleteArticulos(id: number): Promise<void>{
        const articulos = 'http://127.0.0.1:8000/articulos'
        const format = '?format=json'
    
        return this.http.delete(articulos+'/'+id, {headers: this.headers})
            .toPromise()
            .then(()=>null)
    }
    
    createDeposito(d: Deposito): Promise<Deposito> {
        return this.http.post("http://127.0.0.1:8000/depositos/", JSON.stringify(d), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Deposito)
    }

}