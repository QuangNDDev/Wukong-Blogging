import { useEffect, useState } from "react";
import FeatureItem from "../feature-item";
import Heading from "../heading";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

function Feature() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    let result = [];
    onSnapshot(queries, (snapshot) => {
      snapshot.forEach((item) => {
        result.push({
          id: item.id,
          ...item.data(),
        });
      });
      setPosts(result);
      // console.log(result);
    });
  }, []);
  return (
    <div className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout">
          {posts.length > 0 &&
            posts.map((item) => <FeatureItem key={item.id} posts={item} />)}
        </div>
      </div>
    </div>
  );
}

export default Feature;
