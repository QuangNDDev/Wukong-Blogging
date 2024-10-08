import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
export default function useFirebaseImage(setValue, getValues) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  if (!setValue || !getValues) return;

  const handleUpdloadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("defautl");
        }
      },
      (error) => {
        console.log("error", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          setProgress(0);
        });
      }
    );
  };

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return null;
    setValue("image_name", file.name);
    console.log(file);
    handleUpdloadImage(file);
  };

  const resetImage = () => {
    setImage(""); // Reset hình ảnh
    setProgress(0); // Reset progress
  };

  const handleDeleteImage = () => {
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + getValues("image_name"));
    deleteObject(imageRef)
      .then(() => {
        console.log("remove image succesfully");
        setImage("");
      })
      .catch((error) => {
        console.log("Cannot remove image", error);
      });
  };

  return {
    progress,
    setProgress,
    image,
    setImage,
    handleUpdloadImage,
    handleSelectImage,
    handleDeleteImage,
    resetImage,
  };
}
