export default function AddButton(props) {
	return (
		<button className='px-2 py-0 text-white bg-green-500 border border-gray-500 hover:bg-green-400' onClick={props.onClick}>
			+
		</button>
	);
}
