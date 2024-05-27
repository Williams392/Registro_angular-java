import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Models/Producto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  private productoServicio = inject(ProductoService);
  public listaProductos:Producto[]=[];
  public displayColumns:string[]=
  ['codproducto','nombre','stock', 'precio','acciones'];
  
  obtenerProductos(){
    this.productoServicio.lista().subscribe({
      next:(data)=>{
        if(data.length>0){
          this.listaProductos=data;
        }
      },
      error:(err)=>{
        console.log(err.message);
      }
    });    
  }  

  nuevo(){
    this.router.navigate(['/producto',0]);
  }

  editar(objeto:Producto){
    this.router.navigate(['/producto',objeto.codproducto]);
  }

  eliminar(objeto:Producto){
    console.log("Eliminar");
  }

  constructor(private router:Router){
    this.obtenerProductos();
  }
}
