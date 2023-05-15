import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox } from "antd";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import {
  addCountDeleteAction,
  changeinputAction,
  deleteTodoAction,
  updateEtatAction,
  updateCheckedAction,
  addCountDoneAction,
  addCountResultsAction,
} from "../redux/actions";

export default function ListTDL() {
  const selectorListTD = useSelector((data) => data.todolist);
  console.log("selectorListTD :", selectorListTD);
  const selectorCount = useSelector((data) => data.count);
  const dispatch = useDispatch();

  const ListDone = selectorListTD.filter((item) => item.checked === true);
  console.log("ListDone.length:", ListDone.length);

  useEffect(() => {
    dispatch(addCountDoneAction(ListDone.length));
    dispatch(addCountResultsAction(selectorListTD.length));
  }, [ListDone.length, dispatch, selectorListTD.length]);

  function handleDelete(e) {
    dispatch(deleteTodoAction(e.currentTarget.value));
    dispatch(addCountDeleteAction(selectorCount.Delete + 1));
  }

  function handleUpdate(e) {
    const valuefind = selectorListTD.find(
      (i) => i.id === parseInt(e.currentTarget.value)
    )?.title;
    const obj = { updated: true, idtache: e.currentTarget.value };
    dispatch(updateEtatAction(obj));
    dispatch(changeinputAction(valuefind));
  }

  function handleChecked(e) {
    console.log("handleChecked:", e.target.checked);
    dispatch(
      updateCheckedAction({ id: e.target.value, checked: e.target.checked })
    );
    dispatch(addCountDoneAction(ListDone.length));
  }

  return (
    <>
      <div className="mb-5">
        <span className="text-sm text-slate-400">
          {selectorCount.Results} Resultat.
        </span>
      </div>
      <div id="ListTDL">
        {console.log("selectorListTD ?", selectorListTD.length === 0)}
        {selectorListTD.length !== 0 ? (
          selectorListTD.map((item, index) => (
            <div
              key={index}
              className=" p-2 mb-5 border-solid border-2 border-gray-200 flex justify-around rounded-md"
            >
              <span className="text-gray-400">{index + 1} -</span>
              <h3>{item.title}</h3>
              <div className="Action-box">
                <Button
                  className="mx-2 inline-flex justify-center items-center bg-red-400 text-white "
                  type="default"
                  value={item.id}
                  onClick={handleDelete}
                  icon={<DeleteOutlined />}
                />
                <Button
                  className="mx-2 inline-flex justify-center items-center bg-yellow-300 text-white "
                  type="default"
                  value={item.id}
                  onClick={handleUpdate}
                  icon={<EditFilled />}
                />
                <Checkbox
                  className="ml-9 inline-flex justify-center items-center"
                  checked={item.checked}
                  value={item.id}
                  onChange={handleChecked}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">Not Created</div>
        )}
      </div>
    </>
  );
}
