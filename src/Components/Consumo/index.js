import React, { Component } from 'react'
import axios from "axios"
import styles from "./Consumo.module.css"


export default class Consumo extends Component {

    state ={
        categories:[],
        products:[]
    }

    componentDidMount() {
        axios.get(`/services/api/v1/market/categories/`)
          .then(res => {
            const categories = res.data;
            this.setState({ categories });
          })
      }

      getProducts(){
        axios.get(`/services/api/v1/market/products/`)
        .then(res2 => {
          const products = res2.data;
          this.setState({ products });
        })
      }

    render() {
        return (
            <div>
                <ul>
                    { this.state.categories.map(category => <li>{category.name}</li>)}
                </ul>

                <ul>
                    { this.state.products.map(product => <li>{product.photo}</li>)}
                </ul>
        </div>
        )
    }
}
