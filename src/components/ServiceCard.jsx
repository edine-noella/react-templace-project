/* eslint-disable react/prop-types */

function ServiceCard(props) {
  return (
    <div className="pt-4 ">
         <img
        src={props.img}
        alt={props.title}
        className="w-4/12 h-4/12 rounded-full p-4 justify-center mx-auto"
      />

      <h1 className="text-2xl font-bold p-4 text-center text-white">{props.title}</h1>
      <p className="p-4 text-center text-white w-8/12 mx-auto text-lg">{props.description}</p>

    </div>
  )
}
 
export default ServiceCard