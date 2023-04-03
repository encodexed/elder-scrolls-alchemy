export default function RemoveButton(props) {
	return (
		<button className='px-2.5 py-0 text-white bg-red-500 border border-gray-500 hover:bg-red-400' onClick={props.onClick}>
			-
		</button>
	);
}
