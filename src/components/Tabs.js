export default function Tabs(props) {
   const tabStyle = 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ';
   const active = 'bg-blue-500 text-white';
   const inactive = 'bg-white text-black';
	const ingredientsStyle = props.viewingByPotions === false ? (tabStyle + active) : (tabStyle + inactive);
	const potionsStyle = props.viewingByPotions === true ? (tabStyle + active) : (tabStyle + inactive);

	return (
		<div className='w-full max-w-md px-2 m-auto mt-6 sm:px-0'>
			<div className='flex p-1 space-x-1 rounded-xl bg-blue-900/20'>
            <button onClick={props.ingredientsClickHandler} className={ingredientsStyle}>
					Ingredients
            </button>
            <button onClick={props.potionsClickHandler} className={potionsStyle}>
					Potion Effects
				</button>
			</div>
		</div>
	);
}