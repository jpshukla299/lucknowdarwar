import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from './firebase';

// const db = getFirestore();

// ALL FOODS

// get all Foods
 // const querySnapshot = await getDocs(collection(db, 'foods'));
    // return querySnapshot.docs.map(doc => doc.data());
// export const getAllfoods = async () => {
   

//     const unsubscribe = db.collection('todos').onSnapshot((snapshot) => {
//         const tasksData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        
//       });
  
// }

export const getAllfoods = async () => {
    const snapshot = await db.collection('todos').get();
    const tasksData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return tasksData;
}

// // Post all Foods
// export const addFood = async (food) => {
//     await addDoc(collection(db, 'foods'), food);
// }

// //get a single food from /foods 
// export const getAFood = async (id) => {
//     const docRef = doc(db, 'foods', id);
//     const docSnap = await getDoc(docRef);
//     return docSnap.data();
// }

// //delete a single from foods
// export const deleteAFood = async (id) => {
//     await deleteDoc(doc(db, 'foods', id));
// }

// // CATEGORIES

// // get all Categories
// export const getAllCategories = async () => {
//     const querySnapshot = await getDocs(collection(db, 'categories'));
//     return querySnapshot.docs.map(doc => doc.data());
// }

// // get a food from category
// export const getCategoryFood = async (id) => {
//     const docRef = doc(db, 'categories', id);
//     const docSnap = await getDoc(docRef);
//     return docSnap.data();
// }

// // Add a Category 
// export const addCategory = async (body) => {
//     await addDoc(collection(db, 'categories'), body);
// }

// // Add a food to categories 
// export const addFoodCategory = async (id, body) => {
//     const docRef = doc(db, 'categories', id);
//     await updateDoc(docRef, { foods: [...body.foods] });
// }

// //delete a single from categories
// export const deleteAFoodcategories = async (id) => {
//     await deleteDoc(doc(db, 'categories', id));
// }

// // Delete a food from a specific category
// export const deleteFoodFromCategory = async (categoryId, foodId) => {
//     const categoryRef = doc(db, 'categories', categoryId);
//     await updateDoc(categoryRef, { foods: FieldValue.arrayRemove(foodId) });
// }

// // CART

// // Insert a food to cart
// export const addFoodCart = async (food) => {
//     await addDoc(collection(db, 'cart'), food);
// }

// // get all foods from cart
// export const getCart = async () => {
//     const querySnapshot = await getDocs(collection(db, 'cart'));
//     return querySnapshot.docs.map(doc => doc.data());
// }

// // delete a food from cart 
// export const deleteACart = async (id) => {
//     await deleteDoc(doc(db, 'cart', id));
// }
