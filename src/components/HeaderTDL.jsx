export default function HeaderTDL({ title }) {
  return (
    <div>
      <h1 className="text-center p-10">{title}</h1>
      <div>
        <span className="mx-5">NEW</span>
        <span className="mx-5">DONE</span>
        <span className="mx-5">DELETE</span>
      </div>
    </div>
  );
}
