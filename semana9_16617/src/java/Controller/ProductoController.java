/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;
import Entities.Producto;
import dao.ProductoDao;
import java.util.List;

public class ProductoController {

    public ProductoController() {
    }
    
    public List<Producto> listar() {
        return new ProductoDao().listarProductos();
    }
    
    public Producto obtener(String codigo){
        return new ProductoDao().obtenerProducto(codigo);
    }
    
}
