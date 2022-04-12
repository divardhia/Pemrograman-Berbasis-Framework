import React,{Component} from "react";
import Produk from "../components/produk";

class ListProduk extends Component{
    state={
        listProduct:[],
        listKeranjang:[],
        insertKeranjang:{
            id:0, 
            idProduk:0,
            nama:"",
            harga:0,
            qty:0,
            subTotal:0,
        }
    }
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/produk')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduct: jsonHasilAmbilDariAPI
                })
            })
    }
    getAllKeranjang = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasil => {
                this.setState({
                    listKeranjang: jsonHasil
                })
            })
    }
    tambahKeranjang = (props, jumlah) =>{
        let produk = {...this.state.insertKeranjang};
        produk.id = jumlah+1;
        produk.idProduk = props.id;
        produk.nama = props.nama;
        produk.harga = props.harga;
        produk.qty = 1;
        produk.subTotal = props.harga;
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produk)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }
    updateKeranjang = (props, idKeranjang, qty) =>{
        let produk = {...this.state.insertKeranjang};
        produk.id = idKeranjang;
        produk.idProduk = props.id;
        produk.nama = props.nama;
        produk.harga = props.harga;
        produk.qty = qty+1;
        produk.subTotal = produk.harga * produk.qty;
        fetch(`http://localhost:3002/keranjang/${produk.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produk)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }
    componentDidMount(){
        this.ambilDataDariServerAPI();
        this.getAllKeranjang();
    }
    updateStokProduk = (id, produk) => {
        fetch(`http://localhost:3001/produk/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produk)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }
    handleTombolBeli =(props)=> {
        let inKeranjang = false;
        let idKeranjang = 0;
        let qty =0;
        let produk = {...props};
        produk.stok = produk.stok-1;
        this.updateStokProduk(props.id, produk);

        this.getAllKeranjang();
        let jumlah = this.state.listKeranjang.length;
        for (let index = 0; index < jumlah; index++) {
            if(props.id===this.state.listKeranjang[index]["idProduk"]){
                inKeranjang = true;
                idKeranjang = index +1;
                qty = this.state.listKeranjang[index]["qty"]
            }
        }

        if(inKeranjang==true){
            this.updateKeranjang(produk, idKeranjang, qty);
        
        }
        else{
            this.tambahKeranjang(produk, jumlah);
        }
    }

    render(){
        return(
            <div className="produk-kulkas">
                <h2>List Produk</h2><hr />
                {
                    this.state.listProduct.map(produk => {
                        return <Produk key={produk.id} id={produk.id} nama={produk.nama}
                        harga={produk.harga} stok={produk.stok} gambar={produk.gambar} beli={this.handleTombolBeli}/>
                    })
                }
            </div>
        )
    }
}

export default ListProduk;