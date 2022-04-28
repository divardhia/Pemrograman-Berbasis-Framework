import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Get
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Post
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Delete
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

// Inisialisasi function-function yang akan disediakan global API
const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;