import { useEffect, useState } from "react";
import ActionEdit from "../../action/action-edit";
import ActionView from "../../action/action-view";
import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import LabelStatus from "../../label-status";
import Table from "../../table";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { categoryStatus } from "../../../utils/constants";
import ActionDelete from "../../action/action-delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // get all document tu firestore
    const colRel = collection(db, "categories");
    onSnapshot(colRel, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategoryList(result);
    });
  }, []);
  const handleDelete = async (docId) => {
    const colRef = doc(db, "categories", docId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef);
        Swal.fire({
          title: "Deleted!",
          text: "This category has been deleted.",
          icon: "success",
        });
      }
    });
    console.log(doc);
  };

  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button
          height="60px"
          type="button"
          to="/dashboard/manage/add-category"
          kind="ghost"
          hasGradient={false}
        >
          Create category
        </Button>
      </DashboardHeading>
      <Table>
        <thead className="bg-[#f7f7f8]">
          <tr>
            <th className="py-5 font-semibold text-left px-7">Id</th>
            <th className="py-5 font-semibold text-left px-7">Name</th>
            <th className="py-5 font-semibold text-left px-7">Slug</th>
            <th className="py-5 font-semibold text-left px-7">Status</th>
            <th className="py-5 font-semibold text-left px-7">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.length > 0 &&
            categoryList.map(({ id, name, slug, status }) => (
              <tr key={id}>
                <td className="py-4 align-middle px-7">{id}</td>
                <td className="py-4 align-middle px-7">{name}</td>
                <td className="py-4 align-middle px-7">
                  <span className="text-gray-500">
                    <span className="text-gray-400 italic">{slug}</span>
                  </span>
                </td>
                <td className="py-4 align-middle px-7">
                  {Number(status) === categoryStatus.APPROVED ? (
                    <LabelStatus type="success">Approved</LabelStatus>
                  ) : Number(status) === categoryStatus.UNAPPROVED ? (
                    <LabelStatus type="danger">Unapproved</LabelStatus>
                  ) : (
                    ""
                  )}
                </td>
                <td className="py-4 align-middle px-7">
                  <div className="flex items-center text-gray-500 gap-x-3">
                    <ActionView />
                    <ActionEdit
                      onClick={() =>
                        navigate(`/dashboard/manage/update-category?id=${id}`)
                      }
                    />
                    <ActionDelete onClick={() => handleDelete(id)} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCategory;
