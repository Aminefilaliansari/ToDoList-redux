import { useSelector } from "react-redux";

const HeaderTDL = ({ title }) => {
  const selectorCount = useSelector((data) => data.count);
  console.log("selectorCount:", selectorCount);

  return (
    <div>
      <h1 className="text-center p-10 underline underline-offset-8">{title}</h1>
      <div>
        <span className="mx-5 text-blue-700">NEW : {selectorCount.New}</span>
        <span className="mx-5 text-green-600">DONE : {selectorCount.Done}</span>
        <span className="mx-5 text-red-600">DELETE : {selectorCount.Delete}</span>
      </div>
    </div>
  );
}

HeaderTDL.propTypes = {
  title: () => '',
};

export default HeaderTDL;
