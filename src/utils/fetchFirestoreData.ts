import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";

// Helper function to fetch doc from Firestore
export const fetchFirestoreData = async (
  collectionName: string,
  docId: string | null = null
) => {
  try {
    let docRef;

    if (docId) {
      // If docId is provided, construct a reference to a specific document
      docRef = doc(db, collectionName, docId);
    } else {
      // If docId is not provided, assume you want a reference to the entire collection
      docRef = doc(db, collectionName);
    }

    const snapshot = await getDoc(docRef);
    return snapshot.exists() ? snapshot.data() : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
