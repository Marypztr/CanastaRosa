import React, { Component } from 'react'
import axios from "axios"
import TablePagination from '@material-ui/core/TablePagination';
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
        axios.get(`/services/api/v1/market/products/?page=691`)
        .then(res => {
          const products = res.data.results;
          this.setState({ products });
        })
      }

    render() {
        return (
            <div className={styles.List}>
                <div className={styles.categories}>
                    { this.state.categories.map(category => <React.Fragment><label>{category.name}</label><label>{category.slug}</label></React.Fragment>)}
                </div>

                <div className={styles.categories}>
                    { this.state.products.map(product => <label>{product.name}</label>)}
                </div>
                <TablePagination
                />
        </div>
        )
    }
}
