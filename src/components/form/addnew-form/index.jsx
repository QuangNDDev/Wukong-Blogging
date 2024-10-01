import { useForm } from "react-hook-form";
import Field from "../../field";
import Label from "../../label";
import Button from "../../button";
import Input from "../../input";
import FieldCheckboxes from "../../field-checkbox";
import Radio from "../../radio-button";
import { postStatus } from "../../../utils/constants";
import Dropdown from "../../dropdown/dropdown";
// import Option from "../../dropdown/option";
// import Select from "../../dropdown/select";
// import List from "../../dropdown/lish";
import slugify from "slugify";
import ImageUpload from "../../image-upload";
import useFirebaseImage from "../../../hooks/useFirebaseImage";
import Toggle from "../../toggle";

const PostAddNew = () => {
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      status: 2,
      hot: false,
    },
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const { progress, image, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);
  const handleAddPost = async (values) => {
    values.slug = slugify(values.slug || values.title);
    // handleUpdloadImage(values.image);
    console.log("values form => ", values);
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
            {/* <select className="block w-full mt-1 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary">
              <option value="">Select category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select> */}
            <Dropdown></Dropdown>
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
