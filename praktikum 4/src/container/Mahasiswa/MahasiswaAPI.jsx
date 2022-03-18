import React, { Component } from "react";
import './Mahasiswa.css';
import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";

class MahasiswaAPI extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 2022,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')     
            .then(response => response.json())      
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <h2>Post Data Mahasiswa</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="NIM">NIM </label>
                        <input type="number" className="form-control" name="NIM" id="NIM" onChange={this.handleTambahMahasiswa} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nama">Nama </label>
                        <input type="text" className="form-control" name="nama" id="nama" onChange={this.handleTambahMahasiswa} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="alamat">Alamat </label>
                        <textarea className="form-control" name="alamat" id="alamat" rows="3" onChange={this.handleTambahMahasiswa} required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hp">HP </label>
                        <input type="text" className="form-control" name="hp" id="hp" onChange={this.handleTambahMahasiswa} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="angkatan">Angkatan</label>
                        <input type="number" className="form-control" name="angkatan" id="angkatan" onChange={this.handleTambahMahasiswa} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status </label>
                        <select className="form-control" name="status" id="status" onChange={this.handleTambahMahasiswa} required>
                            <option selected disabled value="">--Pilih Status--</option>
                            <option value="aktif">aktif</option>
                            <option value="cuti">cuti</option>
                            <option value="lulus">lulus</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </form>
                <hr />
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Mahasiswa key={mahasiswa.id} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan}
                            status={mahasiswa.status} idMahasiswa={mahasiswa.NIM} id={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa} />
                    })
                }
            </div>
        )
    }
}

export default MahasiswaAPI;