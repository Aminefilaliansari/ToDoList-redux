import { Input, Button } from "antd";
import { PlusOutlined, SaveFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  changeinputAction,
  addTodoAction,
  updateEtatAction,
  updateTodoAction,
  updateCountNewAction,
} from "../redux/actions";

export default function InputTDL() {
  const dispatch = useDispatch();
  /*
  const selectorValue = useSelector((data) => data.input);
  const selectorEtat = useSelector((data) => data.etatUpdate);
  const selectorCount = useSelector((data) => data.count);
  */
  const {
    input: selectorValue,
    etatUpdate: selectorEtat,
  } = useSelector((data) => data);

  function handleAddTodo() {
    if (selectorValue) {
      dispatch(
        addTodoAction({
          id: Date.now(),
          title: selectorValue,
          checked: false,
        })
      );
      dispatch(changeinputAction(""));
      dispatch(updateCountNewAction('inc'));
    }
  }

  function handleChangeInput(e) {
    dispatch(changeinputAction(e.target.value));
  }

  function handleSave() {
    const obj2 = { updated: false, idtache: selectorEtat.idtache };

    dispatch(updateEtatAction(obj2));
    dispatch(changeinputAction(""));

    const obj = {
      id: selectorEtat.idtache,
      title: selectorValue,
      checked: false,
    };

    dispatch(updateTodoAction(obj));
  }

  return (
    <div className="p-10 flex">
      <Input
        className="mr-5"
        placeholder="tache"
        value={selectorValue}
        onChange={handleChangeInput}
      />

      {!selectorEtat.updated ? (
        <Button
          className="inline-flex justify-center items-center bg-sky-400 text-white"
          type="default"
          icon={<PlusOutlined />}
          onClick={handleAddTodo}
        />
      ) : (
        <Button
          className="inline-flex justify-center items-center"
          type="default"
          icon={<SaveFilled />}
          onClick={handleSave}
        />
      )}
    </div>
  );
}
