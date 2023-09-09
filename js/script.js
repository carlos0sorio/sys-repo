let user = document.getElementById('registrarUser')
let password = document.getElementById('registrarPassword')
let ingresar = document.getElementById('ingresar')
let produc = []
let cli = []
let prove = []
let guardarClientes = {}
let guardarProveedores = {}
let guardarProductos = {}
let usuario = document.getElementById('user')
let contraseña = document.getElementById('password')
let seccionProducto = document.getElementById('seccionProducto')
let seccionCliente = document.getElementById('seccionCliente')
let seccionProveedor = document.getElementById('seccionProveedor')
let mostrarProducto = document.getElementById('mostrarProducto')
let mostrarCliente = document.getElementById('mostrarCliente')
let mostrarProveedor = document.getElementById('mostrarProveedor')
let con = 0
// cliente
let nombreCliente = document.createElement('input')
nombreCliente.placeholder = 'nombre'
nombreCliente.type = 'text'
let correo = document.createElement('input')
correo.placeholder = 'correo'
correo.type = 'text'
let direccionCLiente = document.createElement('input')
direccionCLiente.placeholder = 'direccion'
direccionCLiente.type = 'text'
let telefonoCliente = document.createElement('input')
telefonoCliente.placeholder = 'telefono'
telefonoCliente.type = 'text'
let guardarCliente = document.createElement('button')
guardarCliente.textContent = 'guardar'
// producto
let nombreProducto = document.createElement('input')
nombreProducto.placeholder = 'nombre'
nombreProducto.type = 'text'
let descripcion = document.createElement('input')
descripcion.placeholder = 'descripcion'
descripcion.type = 'text'
let cantidad = document.createElement('input')
cantidad.placeholder = 'cantidad'
cantidad.type = 'text'
let valor = document.createElement('input')
valor.placeholder = 'valor'
valor.type = 'text'
let guardarProducto = document.createElement('button')
guardarProducto.textContent = 'guardar'

// proveedor
let nombreProveedor = document.createElement('input')
nombreProveedor.placeholder = 'nombre'
nombreProveedor.type = 'text'
let nit = document.createElement('input')
nit.placeholder = 'nit'
nit.type = 'text'
let direccionProveedor = document.createElement('input')
direccionProveedor.placeholder = 'direccion'
direccionProveedor.type = 'text'
let telefonoProveedor = document.createElement('input')
telefonoProveedor.placeholder = 'telefono'
telefonoProveedor.type = 'text'
let guardarProveedor = document.createElement('button')
guardarProveedor.textContent = 'guardar'     
// funciones
function ingreso(){
    if((usuario.value === user.value)&&(contraseña.value === password.value)){
        ingresar.addEventListener('click',validacion)
    }
    else{
        ingresar.addEventListener('click',alerta)
    } 
    if(con >= 3){
        ingresar.addEventListener('click',denegacion)
    } 
}
function alerta(){
    if(con<3){
        alert('datos incorrectos')
    }
    con = con + 1
} 
function validacion(){
   location.href = 'menu.html'   
}
function denegacion(){
    alert('intentos agotados')
    ingresar.disabled = true
}
function botonProducto(){
    seccionProducto.append(nombreProducto,descripcion,cantidad,valor,guardarProducto)
}
guardarProducto.addEventListener('click',producto)
function producto(){
     // objeto producto
    function productos(nombreProducto, descripcion, cantidad, valor){
        this.nombreProducto = nombreProducto,
        this.descripcion = descripcion,
        this.cantidad = cantidad,
        this.valor = valor
    }
    guardarProductos = new productos(nombreProducto.value, descripcion.value, cantidad.value, valor.value)
    produc.push(guardarProductos)
    productoMostrar()
    console.log(produc)
}
function productoMostrar(){
    mostrarProducto.innerHTML+=`
    <tr>
        <td>${guardarProductos.nombreProducto}</td>
        <td>${guardarProductos.descripcion}</td>
        <td>${guardarProductos.cantidad}</td>
        <td>${guardarProductos.valor}</td>
    </tr>
    `
}
function botonCliente(){
    seccionCliente.append(nombreCliente,correo,direccionCLiente,telefonoCliente,guardarCliente)
}
guardarCliente.addEventListener('click',cliente)
function cliente(){
    // objeto cliente
    function clientes(nombreCliente, telefonoCliente, direccionCLiente, correo){
        this.nombreCliente = nombreCliente,
        this.telefonoCliente = telefonoCliente,
        this.direccionCLiente = direccionCLiente,
        this.correo = correo
    }
    guardarClientes = new clientes(nombreCliente.value, telefonoCliente.value, direccionCLiente.value, correo.value)
    cli.push(guardarClientes)
    console.log(cli) 
    clienteMostrar()
}
function usuarioCreado(){
    alert('usuario creado')
}
function clienteMostrar(){
    mostrarCliente.innerHTML+=`
    <tr>
        <td>${guardarClientes.nombreCliente}</td>
        <td>${guardarClientes.correo}</td>
        <td>${guardarClientes.direccionCLiente}</td>
        <td>${guardarClientes.telefonoCliente}</td>
    </tr>
    `
}
function botonProveedor(){
    seccionProveedor.append(nombreProveedor,nit,direccionProveedor,telefonoProveedor,guardarProveedor)
}
guardarProveedor.addEventListener('click',proveedor)
function proveedor(){
    
    // objeto proveedor
    function proveedores(nombreProveedor, nit, direccionProveedor, telefonoProveedor){
        this.nombreProveedor = nombreProveedor,
        this.nit = nit,
        this.direccionProveedor = direccionProveedor,
        this.telefonoProveedor = telefonoProveedor
    }
    guardarProveedores = new proveedores(nombreProveedor.value, nit.value, direccionProveedor.value, telefonoProveedor.value)
    prove.push(guardarProveedor)
    console.log(prove)
    proveedorMostrar()
}
function proveedorMostrar(){
    mostrarProveedor.innerHTML+=`
        <tr>
            <td>${guardarProveedores.nombreProveedor}</td>
            <td>${guardarProveedores.nit}</td>
            <td>${guardarProveedores.direccionProveedor}</td>
            <td>${guardarProveedores.telefonoProveedor}</td>
        </tr>
    `
}