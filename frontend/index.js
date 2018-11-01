const axios = Axios.create({ baseURL: 'http://localhost:3000' });

function upload(e) {
    let files = this.files;
    console.log(files);
}
const avatar = document.getElementById('avatar');
avatar.addEventListener('change', upload, false);