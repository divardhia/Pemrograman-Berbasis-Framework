import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
// import API from "../../services";
import { db } from "../../firebase/config"
import { onValue, ref, remove, set } from "firebase/database";

class BlogPost extends Component {
    constructor(props) {
        super(props);

        this.state = {              // komponen state dari React untuk statefull component
            listArtikel: []         // variabel array yang digunakan untuk menyimpan data API
        }
    }

    ambilDataDariServerAPI = () => {    // fungsi untuk mengambil data API dari Realtime Database Firebase
        onValue(ref(db), snapshot => {
            const state = snapshot.val();
            if (state !== null) {
                const arr = Object.values(state);
                this.setState({ listArtikel: arr })
            } else {
                this.setState({ listArtikel: [] })
            }
            console.log(this.state);
        });
    }

    simpanDataKeServerAPI = () => {     // fungsi untuk mengirim/insert data ke API Realtime Database Firebase
        const length = this.state.listArtikel.length
        if (length > 0) {
            const uid = this.state.listArtikel[length - 1]['uid'];
            console.log(this.state.listArtikel[length - 1]);
            set(ref(db, `/${uid}`), this.state.listArtikel[length - 1]);
        }
    }

    componentDidMount() {       // komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI() // ambil data dari server API Lokal
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.simpanDataKeServerAPI();
        }
    }

    handleHapusArtikel = (idArtikel) => {        // fungsi yang meng-handle button action hapus data
        const { listArtikel } = this.state;
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel;
        });
        this.setState({ listArtikel: newState });
        remove(ref(db, `/${idArtikel}`));
    }

    handleTombolSimpan = (event) => {                // fungsi untuk meng-handle tombol simpan
        let title = this.refs.judulArtikel.value; // this.refs mengacu pada input field (input text, textarea, dll)
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if (uid && title && body) { // cek apakah semua data memiliki nilai (tidak null)
            const { listArtikel } = this.state;
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid;
            });
            listArtikel[indeksArtikel].title = title;
            listArtikel[indeksArtikel].body = body;
            this.setState({ listArtikel });
        } else if (title && body) { // jika data belum ada di server
            const uuid = new Date().getTime().toString();
            uid = uuid;
            const { listArtikel } = this.state;
            console.log(uid);
            listArtikel.push({ uid, title, body });
            this.setState({ listArtikel });
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value = "";
    };

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" ref="judulArtikel" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" name="body" id="body" rows="3" ref="isiArtikel" ></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {     // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.uid} judul={artikel.title} isi={artikel.body} idArtikel={artikel.uid} hapusArtikel={this.handleHapusArtikel} />     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default BlogPost;