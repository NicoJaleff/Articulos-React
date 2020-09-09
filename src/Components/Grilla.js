import React, { useState, useEffect } from 'react'
import articulos from "../Assets/json/articulos.json"
import Table from 'react-bootstrap/Table'


export default function Grilla(props) {

    const [articulos1, setArticulos1] = useState(articulos)

    const [articulos2, setArticulos2] = useState([])

    useEffect(() => {

        function buscador() {

            const articuloEncontra = props.match.params.codigo;
            const type = props.match.params.type;

            //Es distinto de undefined
            if (articuloEncontra !== undefined) {
                if (type === "codigo") {
                    const articulofiltrado = articulos.filter(articulo => {
                        console.log(articulo)
                        if (articulo.codigo === Number(articuloEncontra)) {
                            console.log(articulo)
                            return articulo
                        }
                    })
                    console.log(articulofiltrado);
                    setArticulos2(articulofiltrado)
                } else {
                    const denominacionEncontrada = articulos.filter(articulo => {
                        if (articulo.articulo.includes(articuloEncontra)) {
                            return articulo
                        }
                    })
                    setArticulos2(denominacionEncontrada)
                }
            }
        }

        buscador()
    }, [props.match.params.codigo, props.match.params.type])


    function promedio(preciosRelevados) {
        let promedio = 0;
        for (let i = 0; i < preciosRelevados.length; i++) {
            let index = preciosRelevados[i];
            promedio = promedio + index;
        }
        promedio = promedio / preciosRelevados.length;
        return promedio;
    }

    return (
        <React.Fragment>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Articulo</th>
                        <th>Codigo</th>
                        <th>Fecha de vencimiento</th>
                        <th>Promedio Precio</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {props.match.params.codigo === undefined ?
                        articulos.map((articulo, index) => (
                            <tr key={index}>
                                <td>{articulo.articulo}</td>
                                <td>{articulo.codigo}</td>
                                <td>{articulo.fechaVencimiento}</td>
                                <td>{promedio(articulo.preciosRelevados)}</td>
                                <td><a href={`/detalleArticulo/${articulo.codigo}`}>Ver mas</a></td>
                            </tr>
                        )) :
                        articulos2.length !== 0 ?
                            articulos2.map((articulo, index) => (
                                <tr key={index}>
                                    <td>{articulo.articulo}</td>
                                    <td>{articulo.codigo}</td>
                                    <td>{articulo.fechaVencimiento}</td>
                                    <td>{promedio(articulo.preciosRelevados)}</td>
                                    <td><a href={`/detalleArticulo/${articulo.codigo}`}>Ver mas</a></td>
                                </tr>
                            )) :
                            <div>
                                <strong> NO SE ENCONTRO ARTICULO CON ESE CODIGO</strong>
                            </div>
                    }

                </tbody>
            </Table>
        </React.Fragment>
    )
}
