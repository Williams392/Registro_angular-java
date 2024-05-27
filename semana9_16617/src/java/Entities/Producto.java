// 1.
package Entities;

public class Producto {
    private String codproducto;
    private String nombre;
    private Double stock;
    private Double precio;

    public Producto() {
    }

    public Producto(String codproducto, String nombre, Double stock, Double precio) {
        this.codproducto = codproducto;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    public String getCodproducto() {
        return codproducto;
    }

    public void setCodproducto(String codproducto) {
        this.codproducto = codproducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getStock() {
        return stock;
    }

    public void setStock(Double stock) {
        this.stock = stock;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
    
    
}

