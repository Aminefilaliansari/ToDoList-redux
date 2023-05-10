import { useState } from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { addTodoAction } from "../redux/actions";

export default function InputTDL() {

  const dispatch = useDispatch();
  const dataListTD = useSelector((data) => data);
  const [tache,setTache]= useState();

  function handleAdd_Todo () {
    dispatch(addTodoAction({id:(dataListTD.length+1),title:tache,checked:false}))
  }

  return (
    <div className="p-10 flex">
      <Input placeholder="input" onKeyPress={(e) => setTache(e.target.value)}/>
      <Button type="default" icon={<PlusOutlined />} onClick={handleAdd_Todo}/>
    </div>
  );
}
