const baseStorageFolder = './storage';
const store = file => {
    const filePath = `${baseStorageFolder}/${file.name}`;
    return new Promise((res, rej) => file.mv(filePath, err => {
        if (err) {
            rej();
            return;
        }
        res();
    }));
};
module.exports = { store };