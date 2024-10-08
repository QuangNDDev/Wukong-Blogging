import { useForm } from "react-hook-form";
import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import Field from "../../field";
import Input from "../../input";
import Label from "../../label";
import Radio from "../../radio-button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../firebase/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { categoryStatus } from "../../../utils/constants";
import slugify from "slugify";
import { toast } from "react-toastify";

function CategoryUpdate() {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const colRef = doc(db, "categories", categoryId);
      const sigleDoc = await getDoc(colRef);
      reset(sigleDoc.data());
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  if (!categoryId) return null;
  const watchStatusCategory = watch("status");
  const handleUpdateCategory = async (values) => {
    console.log(values);
    try {
      const colRef = doc(db, "categories", categoryId);
      await updateDoc(colRef, {
        name: values.name,
        slug: slugify(values.slug || values.name, { lower: true }),
        status: Number(values.status),
      });
      toast.success("Update category successfully!");
      navigate("/dashboard/manage/category");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <DashboardHeading
        title="Update category"
        desc={`Update category: ${categoryId}`}
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateCategory)}>
        <div className="form-layout">
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
            <div className="flex flex-wrap gap-x-5">
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
            </div>
          </Field>
        </div>
        <Button
          kind="primary"
          className="mx-auto"
          type="submit"
          isLoading={isSubmitting}
          disable={isSubmitting}
        >
          Update category
        </Button>
      </form>
    </div>
  );
}

export default CategoryUpdate;
