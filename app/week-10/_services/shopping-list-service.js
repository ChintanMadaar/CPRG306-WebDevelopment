import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../_utils/firebase";

export const getItems = async (userId) => {
  try {
    const items = [];
    const q = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw new Error("Failed to get items");
  }
};

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    const newItem = { id: docRef.id, ...item };
    const updatedItems = await getItems(userId);
    return updatedItems;
  } catch (error) {
    console.error("Error adding item: ", error);
    throw new Error("Failed to add item");
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    await deleteDoc(doc(db, `users/${userId}/items/${itemId}`));
    const updatedItems = await getItems(userId);
    return updatedItems;
  } catch (error) {
    console.error("Error deleting item: ", error);
    throw new Error("Failed to delete item");
  }
};
