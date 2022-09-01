class Producto {
  constructor(id, precio, ganancia) {
    this.id = id;
    this.precio = precio;
    this.ganancia = ganancia;
  }
}

const arrayProductos = [
  {
    id: 1,
    precio: 1,
    ganancia: 0.1,
  },
  {
    id: 2,
    precio: 2,
  },
  {
    id: 3,
    precio: 3,
  },
];
const productos = [new Producto(1, 1), new Producto(2, 2), new Producto(3, 3)];

const objetoSolitoSinClase = {
  id: 3,
  precio: 3,
  ganancia: 0.1,
};
const objetoSolitoSinClase2 = {
  id: 3,
  precio: 3,
  ganancia: 0.1,
};
const objetoSolitoConClase = new Producto(1, 1, 0.1);
const objetoSolitoConClase2 = new Producto(1, 1, 0.1);

// typeof
// instanceof

// any
