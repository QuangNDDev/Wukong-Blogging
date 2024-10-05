import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";
import { db } from "../../../firebase/firebase-config";
import { categoryStatus } from "../../../utils/constants";
import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import Field from "../../field";
import FieldCheckboxes from "../../field-checkbox";
import Input from "../../input";
import Label from "../../label";
import Radio from "../../radio-button";

function CategoryAddNew() {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      slug: "",
      status: 2,
    },
    mode: "onChange",
  });

  const watchStatusCategory = watch("status", 2);

  const handleAddNewCategory = async (values) => {
    if (!isValid) return null;
    const cloneValues = { ...values };
    cloneValues.slug = slugify(cloneValues.name || cloneValues.slug, {
      lower: true,
    });
    cloneValues.status = Number(cloneValues.status);

    const colRef = collection(db, "categories");
    try {
      await addDoc(colRef, {
        ...cloneValues,
        createdAt: serverTimestamp(),
      });

      toast.success("Create new category successfully!");
    } catch (error) {
      toast.error(error.message);
      console.log("error", error);
    } finally {
      reset({
        name: "",
        slug: "",
        status: 2,
      });
    }
  };

  return (
    <div>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddNewCategory)}>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Enter your slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={
                  Number(watchStatusCategory) === categoryStatus.APPROVED
                }
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={
                  Number(watchStatusCategory) === categoryStatus.UNAPPROVED
                }
                value={categoryStatus.UNAPPROVED}
              >
                Unapproved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button
          kind="primary"
          className="mx-auto"
          type="submit"
          isLoading={isSubmitting}
          disable={isSubmitting}
        >
          Add new category
        </Button>
      </form>
    </div>
  );
}

export default CategoryAddNew;
