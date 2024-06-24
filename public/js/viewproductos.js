
traerProd()

function traerProd(){

    url = '/app/productos'

    fetch(url)
        .then(respuesta => respuesta.json())
            .then(datos =>{
                let datosjson = datos
                console.log(datosjson)
                let rutaimg = datosjson[0].imagen
                //let rutahtml = rutaimg.replace(/\\/g,'/').toLowerCase()
                let ruta = rutaimg.slice(6)
                alert(ruta)
                let image = document.getElementById('imgp')
                image.src = `..${ruta}`
                let nombrep = document.getElementById('nombrep')
                nombrep.textContent = datosjson[0].nombre
                let descripcionp = document.getElementById('descripcionp')
                descripcionp.textContent = datosjson[0].descripcion
                let preciop = document.getElementById('preciop')
                preciop.textContent = datosjson[0].precio
                let cantidadp = document.getElementById('cantidadp')
                cantidadp.textContent = datosjson[0].cantidad
            })

}