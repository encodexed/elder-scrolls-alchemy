export default function Card(props) {
   return (
      <div className="bg-white rounded-md border-2 shadow-md shadow-black/30 border-black m-6 p-6">
         {props.children}
      </div>
   )
}