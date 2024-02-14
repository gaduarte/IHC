var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

let Transporte = class {
    constructor() {
        this.onibus = []
    }

    async add_usuario(username, email, uid) {
        const userRef = db.collection("cliente").doc(uid);

        const userData = {
            username: username,
            email: email,
        };

        await userRef.set(userData);
        console.log('Dados do usuário armazenados com sucesso');
    }

    
    async add_usuario_emp(username, email, uid) {
        const userRef = db.collection("empresa").doc(uid);

        const userData = {
            username: username,
            email: email,
        };

        await userRef.set(userData);
        console.log('Dados do usuário armazenados com sucesso');
    }
}

module.exports = Transporte