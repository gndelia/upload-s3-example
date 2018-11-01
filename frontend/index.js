const backendPort = 8001;
const instance = axios.create({ baseURL: `http://localhost:${backendPort}` });

async function upload(e) {
    let files = this.files;
    let formData = new FormData();
    formData.append('file', files[0]);
    const configuration = { headers: { 'content-type': 'multipart/form-data' } };
    let response = await instance.post('/upload', formData, configuration);
    alert('upload done!');
}
const avatar = document.getElementById('avatar');
avatar.addEventListener('change', upload, false);