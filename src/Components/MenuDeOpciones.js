import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class MenuDeOpciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
            , denominacion: ''
        }
    }
    //Recibe un evento por parametro , que el evento es el cambio
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="bg-primary justify-content-between">
                    <Navbar.Brand href="/grilla">Grilla</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href={`/detalleArticulo/${"mas-barato"}`}>MAS BARATO</Nav.Link>
                    </Nav>
                    <Form inline>

                        <div>
                            <Navbar.Brand >Codigo </Navbar.Brand>
                            {/*         Con esto buscas el texto ,          Se ejecuta cada vez que se ejecuta el cambio   */}
                            <FormControl name="text" value={this.state.text} onChange={this.handleChange.bind(this)} type="text" placeholder="Codigo" className=" mr-sm-2" />
                            <Link className="btn btn-dark" to={`/grilla/${"codigo"}/${this.state.text}`} variant="dark" type="submit" >Buscar</Link>
                        </div>

                        <div>
                            <Navbar.Brand >Denominacion </Navbar.Brand>
                            <FormControl name="denominacion" value={this.state.denominacion} onChange={this.handleChange.bind(this)} type="text" placeholder="Denominacion" className=" mr-sm-2" />
                            <Link className="btn btn-dark" to={`/grilla/${"denominacion"}/${this.state.denominacion}`} variant="dark" type="submit" >Buscar</Link>
                        </div>

                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}