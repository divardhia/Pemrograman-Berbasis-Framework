import React,{Component} from "react";
import Keranjang from "../components/keranjang";
import formatRupiah from "../components/formatUang";

class ListKeranjang extends Component{
    state = {
        listKeranjang: [], 
        total: 0
    }

    getAllKeranjang = () => {
        let jumlah = 0
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasil => {
                for (let index = 0; index < jsonHasil.length; index++) {
                    jumlah = jumlah+jsonHasil[index]["subTotal"];
                }
                this.setState({
                    listKeranjang: jsonHasil,
                    total: jumlah
                })
            })
    }
    componentDidMount(){
        this.getAllKeranjang()
    }
    render (){
        return(
            <div className="keranjang">
                <h2>Keranjang Belanja</h2><hr />
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID Produk</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listKeranjang.map(keranjang => {
                                return <Keranjang key={keranjang.id} idProduk={keranjang.idProduk} nama={keranjang.nama}
                                harga={keranjang.harga} qty={keranjang.qty} id={keranjang.id} subTotal={keranjang.subTotal}/>
                            })
                        }
                        <tr>
                            <td colSpan={5} className="text-end"><b>Total : </b> </td>
                            <td>{formatRupiah(this.state.total)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListKeranjang;
