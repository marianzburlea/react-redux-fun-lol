import f from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB5bF46K_0NsTLDUlx6JILlOV-S157jVg8",
  authDomain: "vimea-bac53.firebaseapp.com",
  databaseURL: "https://vimea-bac53.firebaseio.com",
  projectId: "vimea-bac53",
  storageBucket: "vimea-bac53.appspot.com",
  messagingSenderId: "281361862918",
  appId: "1:281361862918:web:490ac872af75779371ce87"
};

f.initializeApp(firebaseConfig)

export const db = f.firestore()
