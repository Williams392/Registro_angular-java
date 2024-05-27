import { Component, Input, OnInit, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../Models/Producto';
import { ProductoService } from '../../Services/producto.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  @Input('id') codproducto!: string;
  nombre !: string;
  stock !: number;
  precio !: number;
  private productoServicio = inject(ProductoService)
  public formBuild = inject(FormBuilder)
  //
  public formProducto: FormGroup = this.formBuild.group({
    nombre : [""],
    stock : [0],
    precio: [0]
  })

  constructor(private router:Router){

  }

  ngOnInit(): void {
    if(this.codproducto != "0"){
      this.productoServicio.obtener(this.codproducto).subscribe({
        next: (data) =>{
          this.formProducto.patchValue({
            nombre : data.nombre,
            stock : data.stock,
            precio : data.precio
          })
        },
        error: (err) =>{
          console.log(err.message);
        }
      })
    }
  }
  //metodo guardar
  guardar(){
    const objeto:Producto={
      codproducto: this.codproducto,
      nombre : this.nombre,
      stock : this.stock,
      precio : this.precio
    };
    if(this.codproducto == "0"){
      //nuevo producto
      this.productoServicio.crear(objeto).subscribe({
        next: (data) =>{
          if(data.isSuccess){
            this.router.navigate(["/"])
          }else{
            alert("Ocurrio algùn error al registrar!!")
          }
        },
        error: (err) =>{
          console.log(err.message);
        }
      })
    }else{
      //actualizamos producto
      this.productoServicio.editar(objeto).subscribe({
        next: (data) =>{
          if(data.isSuccess){
            this.router.navigate(["/"])
          }else{
            alert("Ocurrio algùn error al registrar!!")
          }
        },
        error: (err) =>{
          console.log(err.message);
        }
      })
    }
  }
  volver(){
    this.router.navigate(["/"]);


  }
}
