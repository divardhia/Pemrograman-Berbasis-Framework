import React from "react";

const Mahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/100/100/tech" alt="Gambar Tumbnail mahasiswa" />
            </div>
            <div className="data-mahasiswa">
                <div className="nim"><b>NIM :</b> {props.idMahasiswa}</div>
                <div className="nama"><b>Nama :</b> {props.nama}</div>
                <div className="alamat"><b>Alamat :</b> {props.alamat}</div>
                <div className="hp"><b>HP :</b> {props.hp}</div>
                <div className="angkatan"><b>Angkatan :</b> {props.angkatan}</div>
                <div className="status"><b>Status :</b> {props.status}</div>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default Mahasiswa;