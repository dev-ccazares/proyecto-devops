import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class FactsService {
    private apiUrl: string = environment.apiUrl;
    constructor(private http: HttpClient) {}

    createFacts(u: any) {
        return this.http
            .post(`${this.apiUrl}/factura`, u);
    }

    updateFacts(u: any) {
        return this.http
            .put(`${this.apiUrl}/factura`, u);
    }

    getFacts() {
        return this.http
            .get(`${this.apiUrl}/factura/all`);
    }

    deleteFacts(u: any) {
        return this.http
            .delete(`${this.apiUrl}/factura/${u}`);
    }
}