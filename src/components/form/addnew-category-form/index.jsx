import { useForm } from "react-hook-form";
import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import Field from "../../field";
import Input from "../../input";
import Label from "../../label";
import Radio from "../../radio-button";

function CategoryAddNew() {
  const {
    handleSubmit,
    control,
    // setValue,
    // formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      createAt: new Date(),
    },
    mode: "onChange",
  });

  const handleAddNewCategory = (values) => {
    console.log(values);
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
            <div className="flex flex-wrap gap-x-5">
              <Radio name="status" control={control} checked={true}>
                Approved
              </Radio>
              <Radio name="status" control={control}>
                Unapproved
              </Radio>
            </div>
          </Field>
        </div>
        <Button kind="primary" className="mx-auto">
          Add new category
        </Button>
      </form>
    </div>
  );
}

export default CategoryAddNew;
