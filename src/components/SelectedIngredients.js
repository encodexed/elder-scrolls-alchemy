import IngredientsData from "../IngredientsData";

const emptySlot = {
	id: '-1',
	name: 'Empty',
	src: '/images/Wormwood.png'
}

export default function SelectedIngredients(props) {
	const ingredient1 = IngredientsData[props.selectedIngredients[0]] || emptySlot;
	const ingredient2 = IngredientsData[props.selectedIngredients[1]] || emptySlot;
	const ingredient3 = IngredientsData[props.selectedIngredients[2]] || emptySlot;

	return (
		<div className='flex w-full h-32 max-w-md mx-auto mt-6 space-x-3 align-items-center'>
			<div className='flex flex-col flex-1 text-center border align-items-center'>
				<p>{ingredient1.name}</p>
				<div className='mx-auto'>
					<img
						className='w-24 h-24'
						src={ingredient1.src}
						alt='Ingredient'
					/>
				</div>
			</div>
			<div className='flex flex-col flex-1 text-center border align-items-center'>
				<p>{ingredient2.name}</p>
				<div className='mx-auto'>
					<img
						className='w-24 h-24'
						src={ingredient2.src}
						alt='Ingredient'
					/>
				</div>
			</div>
			<div className='flex flex-col flex-1 text-center border align-items-center'>
				<p>{ingredient3.name}</p>
				<div className='mx-auto'>
					<img
						className='w-24 h-24'
						src={ingredient3.src}
						alt='Ingredient'
					/>
				</div>
			</div>
		</div>
	);
}
