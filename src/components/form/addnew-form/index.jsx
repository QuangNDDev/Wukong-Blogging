import { useForm } from "react-hook-form";
import Field from "../../field";
import Label from "../../label";
import Button from "../../button";
import Input from "../../input";
import FieldCheckboxes from "../../field-checkbox";
import Radio from "../../radio-button";
import { postStatus } from "../../../utils/constants";
import Dropdown from "../../dropdown/dropdown";
import slugify from "slugify";
import ImageUpload from "../../image-upload";
import useFirebaseImage from "../../../hooks/useFirebaseImage";
import Toggle from "../../toggle";
import { useEffect, useState } from "react";
import { db } from "./../../../firebase/firebase-config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Option from "../../dropdown/option";
import Select from "../../dropdown/select";
import List from "../../dropdown/lish";
import { useAuth } from "../../../contexts/auth-context/auth-context";
import { toast } from "react-toastify";

const PostAddNew = () => {
  const { control, handleSubmit, watch, setValue, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      categoryId: "",
      status: 2,
      hot: false,
      image_name: "",
      image: "",
    },
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const { progress, image, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);
  const { userInfo } = useAuth();
  const handleAddPost = async (values) => {
    values.slug = slugify(values.slug || values.title, { lower: true });
    // handleUpdloadImage(values.image);
    console.log("values form => ", values);
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      categoryId: values.categoryId,
      title: values.title,
      slug: values.slug,
      status: values.status,
      image,
      image_name: values.image_name,
      userId: userInfo.uid,
    });
    reset({
      title: "",
      slug: "",
      categoryId: "",
      status: 2,
      hot: false,
      image_name: "",
      image: "",
    });
    setSelectedCategory({});
    toast.success("Add new post successfully");
  };
  console.log(userInfo);
  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      console.log(result);
      setCategories(result);
    }
    getData();
  }, []);
  const handleClickOptionCategory = (category) => {
    setValue("categoryId", category.id);
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary dashboard-heading">
        Add new post
      </h1>
      <form onSubmit={handleSubmit(handleAddPost)}>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            />
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            />
          </Field>
          {/* <Field>
            <Label>Author</Label>
            <Input
              control={control}
              placeholder="Enter your author"
              name="author"
            />
          </Field> */}
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              clasName="h-[250px]"
              progress={progress}
              image={image}
              handleDeleteImage={handleDeleteImage}
            />
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Select
                placeholder={`${selectedCategory.name || "Select category"}`}
              ></Select>
              <List>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <Option
                      onClick={() => handleClickOptionCategory(category)}
                      key={category.id}
                    >
                      {category.name}
                    </Option>
                  ))}
              </List>
            </Dropdown>
          </Field>
        </div>

        {/* <div className="grid grid-cols-2 mb-10 gap-x-10"></div> */}
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                control={control}
                name="status"
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                control={control}
                name="status"
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                control={control}
                name="status"
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Rejected
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </div>
  );
};

export default PostAddNew;
