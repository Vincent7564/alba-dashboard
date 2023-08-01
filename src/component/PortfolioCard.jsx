const Portfolio = (props) => {
  return (
    <>
      <div class="block rounded-lg border w-96 hover:border-yellow-400">
        <a href="#!">
        <img src={require("../images/" + props.img)} alt="" />
        </a>
        <div class="p-6">
          <h1 className="text-gray-200">
            {props.type}
          </h1>
          <h5 class="mb-2 text-xl font-bold text-yellow-300">
            {props.title}
          </h5>
          <p class="mb-4 text-base text-black">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
