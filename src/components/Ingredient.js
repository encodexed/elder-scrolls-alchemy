import Icon from "./UI/Icon";

export default function Ingredient(props) {
	return (
		<div className='flex '>
			<div>
				<Icon src={props.src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{props.name}</h3>
			</div>
			<div className="my-auto flex-0">
				<button className='px-2 py-0 text-white bg-green-400 border border-gray-500'>
					+
				</button>
			</div>
			<div className='flex-1 my-auto ml-2'>
				<p className='text-sm text-center text-slate-500'>
					{props.effect1}
				</p>
				<p className='text-sm text-center text-slate-500'>
					{props.effect2}
				</p>
			</div>
			<div className='flex-1 my-auto'>
				<p className='text-sm text-center text-slate-500'>
					{props.effect3}
				</p>
				<p className='text-sm text-center text-slate-500'>
					{props.effect4}
				</p>
			</div>
		</div>
	);
}
