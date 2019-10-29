import React, { Component } from 'react'
import axios from "axios"
import styles from "./Consumo.module.css"


export default class Consumo extends Component {
    state = {
        products: []
     };
     componentDidMount() {
        this.getProducts();
     }
     getProducts = () => {
        axios
            .get(`https://canastarosa.com/services/api/v1/market/categories/`)
           
            .then(data => this.setState({ products: data }))
            .catch(err => {
                console.log(err);
                return null;
            });
     };

    render() {
        return (
            <div>
            {this.state.products.length === 0 ? (
                <div>Loading...</div>
            ) : (
                this.state.products.map((e, i) => {
                    return <div key={i}>{e.products}</div>;
                 })
            )}
        </div>
        )
    }
}
