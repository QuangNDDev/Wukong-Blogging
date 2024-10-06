import { useEffect, useState } from "react";
import ActionEdit from "../../action/action-edit";
import ActionView from "../../action/action-view";
import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import LabelStatus from "../../label-status";
import Table from "../../table";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { categoryStatus } from "../../../utils/constants";

const ManageCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
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
  console.log(categoryList);
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button height="60px" type="button" to="/dashboard/manage/add-category">
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
                  {status === categoryStatus.APPROVED ? (
                    <LabelStatus type="success">Approved</LabelStatus>
                  ) : status === categoryStatus.UNAPPROVED ? (
                    <LabelStatus type="danger">Unapproved</LabelStatus>
                  ) : (
                    ""
                  )}
                </td>
                <td className="py-4 align-middle px-7">
                  <div className="flex items-center text-gray-500 gap-x-3">
                    <ActionView />
                    <ActionEdit />
                    <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </span>
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
