import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getEnglishGretting = async () => {
  try {
    const englishCollection = collection(db, "english");
    const documents = await getDocs(englishCollection);
    const response = documents.docs.map((doc) => doc.data());

    return response;
  } catch (error) {
    throw error;
  }
};
