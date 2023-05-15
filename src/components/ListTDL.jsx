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
} from "../redux/actions";

export default function ListTDL() {
  const dispatch = useDispatch();
  const { todolist: selectorListTD, count: selectorCount } = useSelector(
    (data) => data
  );
  console.log("selectorListTD :", selectorListTD);

  function handleDelete(e) {
    dispatch(deleteTodoAction(e.currentTarget.value));
    dispatch(addCountDeleteAction(selectorCount.Delete + 1));

    const itemDeleted = selectorListTD.find(
      (item) => item.id === parseInt(e.currentTarget.value)
    );

    if (itemDeleted.checked === true) {
      dispatch(addCountDoneAction(selectorCount.Done - 1));
    }
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
    if (e.target.checked === true) {
      dispatch(addCountDoneAction(selectorCount.Done + 1));
    } else {
      dispatch(addCountDoneAction(selectorCount.Done - 1));
    }
    dispatch(
      updateCheckedAction({ id: e.target.value, checked: e.target.checked })
    );
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
