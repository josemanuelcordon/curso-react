import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";

const productosCollection = collection(db, "crud.productos");

//! Cargar productos
const getProducts = async () => {
  try {
    const data = await getDocs(productosCollection);
    console.log(data);
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (err) {
    console.log(err);
  }
};
//! Cargar un producto

//! Crear producto
const addProduct = async (product) => {
  try {
    const docRef = await addDoc(productosCollection, product);
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
};

//! Eliminar producto
const deleteProduct = async (idProduct) => {
  try {
    await deleteDoc(doc(db, "crud.productos", idProduct));
  } catch (err) {
    console.log(err);
  }
};
//! Actualizar producto

export { getProducts, addProduct, deleteProduct };
