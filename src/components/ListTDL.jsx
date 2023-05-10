import { useSelector } from "react-redux";

export default function ListTDL() {
  const dataListTD = useSelector((data) => data);
  console.log("dataListTD", dataListTD);

  return (
    <div id="ListTDL">
      {dataListTD.map((item, index) => 
        (
        <div key={index} className="Box flex">
          <span>{item.id} -</span>
          <h3>{item.title}</h3>
          <div className="Action-box">Action</div>
        </div>
        )
      )}
    </div>
  );
}
