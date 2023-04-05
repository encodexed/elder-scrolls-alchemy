export default function SectionHeader(props) {
   return (
      <div className='mt-2 text-center text-white bg-blue-500'>
         <h2 className='text-lg text-semibold'>{props.title}</h2>
      </div>
   )
}