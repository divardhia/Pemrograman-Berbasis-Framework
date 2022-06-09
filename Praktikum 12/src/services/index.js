import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const getMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc');

// Daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const postMahasiswa = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);
const deleteMahasiswa = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {       // inisialisasi function-function yang akan disediakan global API.
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog,
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
}

export default API;