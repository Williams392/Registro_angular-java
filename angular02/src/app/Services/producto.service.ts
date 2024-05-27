import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apsettings } from '../Settings/appsetings';
import { Producto } from '../Models/Producto';
import { ResponseAPI } from '../Models/ResponseAPI';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private http=inject(HttpClient);
  private apiUrl:string = apsettings.apiUrl+"Producto";
  // aca cambio.
  // private apiUrl:string = apsettings.apiUrl+"Producto";

  constructor() { }

  lista(){
    return this.http.get<Producto[]>(this.apiUrl);
  }

  obtener(codigo:string){
    return this.http.get<Producto>(`${this.apiUrl}/${codigo}`);
  }

  crear(objeto:Producto){
    return this.http.post<ResponseAPI>(this.apiUrl,objeto);
  }

  editar(objeto:Producto){
    return this.http.put<ResponseAPI>(this.apiUrl,objeto);
  }

  eliminar(codigo:string){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${codigo}`);
  }
}
