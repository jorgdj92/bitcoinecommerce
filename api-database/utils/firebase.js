const admin = require("firebase-admin");
const serviceAccount = require("../config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL,
});

class Firebase {

  constructor(table) {
    let db = admin.firestore();
    this.table = db.collection(table)
  }

  async create(id,data){
    let docRef = this.table.doc(id);
    try {
      let setData =  await docRef.set(data)
      return setData;
    } catch (error) {
      return error
    }
  }

  async getData(id) {
    let docRef = await this.table.doc(id);
      try {
        let getData = await docRef.get();
        return getData.data()
      } catch (error) {
        return error
      }
    }

  async createUser(data) {
    try {
      let result = await admin.auth().createUser({
        email: data.email,
        emailVerified: false,
        phoneNumber: data.phoneNumber,
        password: data.password,
        displayName: `${data.name} ${data.lastname}`,
        photoURL: data.photoURL,
        disabled: false,
      });
      return result.uid;
    } catch (error) {
      return error
    }
  }

  async getUser(email) {
    try {
      let result = await admin.auth().getUserByEmail(email);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports =  Firebase