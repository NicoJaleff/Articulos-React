import React, { useEffect, useState } from 'react'
import articulos from "../Assets/json/articulos.json"
import { Card, Button } from 'react-bootstrap'

export default function Detalle2(props) {

    const [articulo, setArticulo] = useState(undefined)

    useEffect(() => {
        function buscarArticulo() {
            const articuloEncontrado = articulos.find(articulo => articulo.codigo === Number(props.match.params.id))
            console.log(articulos);
            setArticulo(articuloEncontrado);
        }

        function buscarMasBarato() {
            let menor = promedio(articulos[0].preciosRelevados);
            let posicion = 0;
            articulos.map((articulo, index) => {
                if (promedio(articulo.preciosRelevados) < menor) {
                    menor = promedio(articulo.preciosRelevados)
                    posicion = index;
                }
            })
            setArticulo(articulos[posicion])
        }

        if (props.match.params.id === "mas-barato") {
            buscarMasBarato();
        } else {
            buscarArticulo();
        }
    }, [])



    //Saco el promedio
    function promedio(preciosRelevados) {
        let promedio = 0;
        for (let i = 0; i < preciosRelevados.length; i++) {
            let index = preciosRelevados[i];
            promedio = promedio + index;
        }
        promedio = promedio / preciosRelevados.length;
        return promedio;
    }

    //Muestro los precios como una lista
    function precios(preciosRelevados) {
        let precios = [];
        for (let i = 0; i < preciosRelevados.length; i++) {
            precios.push(` - $${preciosRelevados[i]}`);
        }
        return precios;
    }

    function Promocion() {
        if (articulo.esPromocion === true) {
            return "Si"
        } else {
            return "NO"
        }
    }

    return (
        <React.Fragment>
            {articulo !== undefined && (
                <Card style={{ width: '30rem' }} className="tarjetaDetalle">
                    <Card.Img variant="top" src={require(`../Assets/img/${articulo.foto}`)} />
                    <Card.Body>
                        <Card.Title className="tituloDetalle">{articulo.articulo}</Card.Title>
                        <Card.Text>
                            <strong>Codigo: </strong> {articulo.codigo}
                        </Card.Text>
                        <Card.Text>
                            <strong>Rubro: </strong>  {articulo.rubro}
                        </Card.Text>
                        <Card.Text>
                            <strong>Tiene Promocion: </strong> {<Promocion></Promocion>}
                        </Card.Text>
                        <Card.Text>
                            <strong>Fecha de Vencimiento:</strong> {articulo.fechaVencimiento}
                        </Card.Text>
                        <Card.Text>
                            <strong>Precios Relevados:</strong> {precios(articulo.preciosRelevados)}
                        </Card.Text>
                        <Card.Text>
                            <strong>Promedio Precios Relevados:</strong> {promedio(articulo.preciosRelevados)}
                        </Card.Text>
                        <Button variant="primary " href="/Home" >Volver</Button>
                    </Card.Body>
                </Card>
            )}
        </React.Fragment>
    )
}
