/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAh7wxm9TVMVatDqgwp22L9COqck3WSzBQ",
  authDomain: "shopinufb.firebaseapp.com",
  projectId: "shopinufb",
  storageBucket: "shopinufb.appspot.com",
  messagingSenderId: "1043664494543",
  appId: "1:1043664494543:web:09b05cc00e8cc912517cba",
  measurementId: "G-FBEL3HSXWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {
    uploadToStorage: async (file: File, fallBackUrl: string = "https://www.shutterstock.com/image-vector/error-500-page-empty-symbol-260nw-1711106146.jpg") => {
        console.log("file",file)
        try  {
            const typeFile = `.${file.type.split('/')[1]}`;
            const fileName = `picture_${Math.ceil(Date.now() * Math.random())}${typeFile}`
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            console.log("dda den up roi")
            const res = await uploadBytes(storageRef, file)
            const url = await getDownloadURL(res.ref)
            .then(res => res)
            .catch(err => fallBackUrl)
            return url
        }catch(err) {
            return fallBackUrl
        }
    }
}