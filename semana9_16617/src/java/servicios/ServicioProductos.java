// Esta clase se creo aparte con un nuevo file.

package servicios;

import Controller.ProductoController;
import Entities.Producto;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;


@WebService(serviceName = "ServicioProductos")
public class ServicioProductos {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "lista")
    public List<Producto> lista() {
        List<Producto> 1 = new ProductoController().listar();
        return 1;
    }

    // aca creo q lo cree mal, verificar si esta bien cuando agrego codigo.
    @WebMethod(operationName = "obtener")
    public Producto obtener(@WebParam(name = "codigo") String codigo) {
        //TODO write your implementation code here:
        return new ProductoController().obtener("1");
    }
}
