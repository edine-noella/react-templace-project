/* eslint-disable react/prop-types */
function FeaturesSectionCard(props) {
  return (
    <div className=""> 
      <img
        src={props.img}
        alt={props.title}
        className="w-6/12 h-6/12 rounded-full p-4 justify-center mx-auto"
      />

      <h1 className="text-2xl font-bold p-4 text-center">{props.title}</h1>
      <p className="p-4 text-center text-gray-600">{props.description}</p>
    </div>
  );
}

export default FeaturesSectionCard;
