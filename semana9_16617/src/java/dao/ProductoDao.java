
package dao;

import Entities.Producto;
import java.util.ArrayList;
import java.util.List;

public class ProductoDao {

    public ProductoDao() {
    }
    
    public List<Producto> listarProductos(){
        List<Producto> lista = new ArrayList();
        
        // Como no tenemos base de datos, hacemos esto:
        lista.add(new Producto("001", "Laptop", 50.0, 2500.0));
        lista.add(new Producto("002", "Tablet", 100.0, 2500.0));
        lista.add(new Producto("003", "Impresora", 500.0, 2500.0));
        
        return lista;
    }
    
    public Producto obtenerProducto(String codigo) {
        Producto r = null;
        r = new Producto("001", "Laptop", 50.0, 2500.0);
        return r;
    }
    
    public int actualizarProducto(Producto producto){
        // Lógica para actualizar el producto en la base de datos
        return 1;
    }
    
    public int nuevoProducto(Producto producto) {
        // Lógica para insertar un nuevo producto en la base de datos
        return 1;
    }
    
    
}
