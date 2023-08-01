const Tech = (props) => {
  return (
    <>
      <div className="pb-10">
        <img src={require("../images/" + props.img)} alt="" />
      </div>
    </>
  );
};

export default Tech;
