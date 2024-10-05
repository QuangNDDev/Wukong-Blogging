import slugify from "slugify";
import PostTitle from "../post-title";
import PostInfo from "../post-info";
import PostImage from "../post-image";
import FeaturePostCategory from "../feature-post-category";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

function FeatureItem({ posts }) {
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");
  const { title, image, categoryId, id, userId, slug } = posts;
  useEffect(() => {
    async function fecthCategory() {
      const docRef = doc(db, "categories", categoryId);
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data());
      setCategory(docSnap.data());
    }
    async function fecthUser() {
      if (userId) {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.data)
          // console.log("users", docSnap.data());
          setUser(docSnap.data());
      }
    }
    fecthUser();
    fecthCategory();
  }, [categoryId, userId]);
  if (!posts || !id) return null;

  const date = posts?.createdAt?.seconds
    ? new Date(posts?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  return (
    <div className="relative w-full h-[169px] rounded-2xl lg:h-[272px]">
      <PostImage url={image} alt="unsplash" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 rounded-2xl"></div>
      <div className="absolute inset-0 z-10 p-5 text-white">
        <div className="flex items-center justify-between mb-5">
          {category && (
            <FeaturePostCategory className="text-sm" to={category?.slug}>
              {category?.name}
            </FeaturePostCategory>
          )}
          {user && (
            <PostInfo
              to={slugify(user?.fullName || "", { lower: true })}
              date={formatDate}
              author={user?.fullName}
            />
          )}
        </div>
        <PostTitle to={slug} size="big" className="text-shadow-lg">
          {title}
        </PostTitle>
      </div>
    </div>
  );
}

export default FeatureItem;
