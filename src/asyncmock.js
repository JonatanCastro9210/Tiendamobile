const misProductos = [
    {id:1, nombre: "iPhone 13", precio: 315, img:"/img/iphone13.png", idCat: "celulares"},
    {id:2, nombre: "iPhone 14", precio: 363, img:"/img/iphone14.jpg", idCat: "celulares"},
    {id:3, nombre: "iPhone 14 pro max", precio: 604, img:"/img/iphone14promax.webp", idCat: "celulares"},
    {id:4, nombre: "iPhone 15", precio: 523, img:"/img/iphone15.webp",  idCat: "celulares"},
    {id:5, nombre: "iPhone 15 pro max", precio: 667, img:"/img/iphone15promax.webp", idCat: "celulares"},
    {id:6, nombre: "iPhone 16", precio: 737, img:"/img/iphone16.webp", idCat: "celulares"},
    {id:7, nombre: "iPhone 16 pro max", precio: 1051, img:"/img/iphone16promax.webp", idCat: "celulares"},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100);
        })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item=>item.id === id)
            resolve(producto)
        }, 100)
        })
    }

    export const getProductosPorCategoria =(idCategoria) =>{
        return new Promise(resolve => {
            setTimeout(()=>{
                const productoCategoria = misProductos.filter(item=> item.idCat === idCategoria)

            })
        }, 100)
    }
