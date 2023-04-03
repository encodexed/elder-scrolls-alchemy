import IngredientsData from "../IngredientsData";
import RemoveButton from "./UI/RemoveButton";

const emptySlot = {
	id: "-1",
	name: "Empty",
	effect1: "-",
	effect2: "-",
	effect3: "-",
	effect4: "-",
	src: "/images/Empty.png",
};

export default function SelectedIngredients(props) {
	const ingredient1 =
		IngredientsData[props.selectedIngredients[0]] || emptySlot;
	const ingredient2 =
		IngredientsData[props.selectedIngredients[1]] || emptySlot;
	const ingredient3 =
		IngredientsData[props.selectedIngredients[2]] || emptySlot;

	const deselectHandler1 = () => {
		props.deselectIngredient(ingredient1.id);
	};

	const deselectHandler2 = () => {
		props.deselectIngredient(ingredient2.id);
	};

	const deselectHandler3 = () => {
		props.deselectIngredient(ingredient3.id);
	};

	return (
		<div className='flex w-full max-w-md mx-auto mt-6 space-x-3'>
			<div className='flex flex-col items-center flex-1'>
				<div className='w-32 h-32 border border-green-300'>
					<div className='absolute'>
						{ingredient1.id >= 0 && (
							<RemoveButton onClick={deselectHandler1} />
						)}
					</div>
					<img
						className='w-full'
						src={ingredient1.src}
						alt={ingredient1.name}
					/>
				</div>
				<div className='text-center'>
					<h4 className='underline text-md'>{ingredient1.name}</h4>
					{ingredient1.id >= 0 && (
						<p className='text-sm leading-none text-slate-500'>
							{ingredient1.effect1}
							<br />
							{ingredient1.effect2}
							<br />
							{ingredient1.effect3}
							<br />
							{ingredient1.effect4}
						</p>
					)}
				</div>
			</div>

			<div className='flex flex-col items-center flex-1'>
				<div className='w-32 h-32 border border-green-300'>
					<div className='absolute'>
						{ingredient2.id >= 0 && (
							<RemoveButton onClick={deselectHandler2} />
						)}
					</div>
					<img
						className='w-full'
						src={ingredient2.src}
						alt={ingredient2.name}
					/>
				</div>
				<div className='text-center'>
					<h4 className='underline text-md'>{ingredient2.name}</h4>
					{ingredient2.id >= 0 && (
						<p className='text-sm leading-none text-slate-500'>
							{ingredient2.effect1}
							<br />
							{ingredient2.effect2}
							<br />
							{ingredient2.effect3}
							<br />
							{ingredient2.effect4}
						</p>
					)}
				</div>
			</div>

			<div className='flex flex-col items-center flex-1'>
				<div className='w-32 h-32 border border-green-300'>
					<div className='absolute'>
						{ingredient3.id >= 0 && (
							<RemoveButton onClick={deselectHandler3} />
						)}
					</div>
					<img
						className='w-full'
						src={ingredient3.src}
						alt={ingredient3.name}
					/>
				</div>
				<div className='text-center'>
					<h4 className='underline text-md'>{ingredient3.name}</h4>
					{ingredient3.id >= 0 && (
						<p className='text-sm leading-none text-slate-500'>
							{ingredient3.effect1}
							<br />
							{ingredient3.effect2}
							<br />
							{ingredient3.effect3}
							<br />
							{ingredient3.effect4}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
