import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2 align="center">About</h2> <br></br>
                <table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
                    <tr>
                        <td>Nama</td>
                        <td>DIVA ARDHIA RAHMANIA</td>
                        <td rowspan="10" align="center"><img src="./images/diva.jpg"  width="210" height="313"/></td>
                    </tr>
                    <tr>
                        <td>JURUSAN</td>
                        <td>TEKNOLOGI INFORMASI</td>
                    </tr>
                    <tr>
                        <td>KELAS</td>
                        <td>3C</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>PEREMPUAN</td>
                    </tr>
                    <tr>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>Mojokerto, 17 November 2000</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>Mojokerto</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>divardhia@gmail.com</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;