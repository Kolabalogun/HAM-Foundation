import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../utils/Firebase";

const useFirestoreCollection = <T>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loader, loaderF] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const dataList: T[] = [];
        snapshot.docs.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() } as T);
        });
        setData(dataList);
        loaderF(false);
      },
      (error) => {
        console.log(error);
        loaderF(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [collectionName]);

  return { data, loader };
};

export default useFirestoreCollection;
