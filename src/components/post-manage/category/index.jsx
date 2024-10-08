import { useEffect, useState } from "react";
import ActionEdit from "../../action/action-edit";
import ActionView from "../../action/action-view";
import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import LabelStatus from "../../label-status";
import Table from "../../table";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { categoryStatus } from "../../../utils/constants";
import ActionDelete from "../../action/action-delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const CATEGORY_PER_PAGE = 5;
const ManageCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState("");
  const [lastDoc, setLashDoc] = useState();
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  const handleLoadMoreCategory = async () => {
    const nextRef = query(
      collection(db, "categories"),

      startAfter(lastDoc),
      limit(CATEGORY_PER_PAGE)
    );
    onSnapshot(nextRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategoryList([...categoryList, ...result]);
    });
    const documentSnapshots = await getDocs(nextRef);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    setLashDoc(lastVisible);
  };
  useEffect(() => {
    // get all document tu firestore
    const fetchData = async () => {
      const colRel = collection(db, "categories");
      const newRef = filter
        ? query(
            colRel,
            where("name", ">=", filter),
            where("name", "<=", filter + "utf8")
          )
        : query(colRel, limit(CATEGORY_PER_PAGE)); // neu ma co nhap filter thi newref se la query con kh thi la colRef
      const documentSnapshots = await getDocs(newRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      const totalSnapshot = await getDocs(collection(db, "categories"));
      setTotalPage(totalSnapshot.size);
      console.log(totalPage);
      onSnapshot(newRef, (snapshot) => {
        let result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategoryList(result);
      });
      setLashDoc(lastVisible);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  const handleChangeFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 500);
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
      <div className="mb-10 flex justify-end">
        <input
          type="text"
          className="p-4 border border-gray-300 rounded-lg"
          placeholder="Search post..."
          onChange={handleChangeFilter}
        />
      </div>
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
      {categoryList.length < totalPage && ( // Sửa điều kiện hiển thị nút
        <div className="mt-10">
          <Button
            type="button"
            className="mx-auto"
            onClick={handleLoadMoreCategory}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ManageCategory;
