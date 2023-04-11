import EffectsData from "../../EffectsData";
import AddButton from "../UI/AddButton";
import Icon from "../UI/Icon";

export default function Effect(props) {

   const effect = EffectsData[props.id - 100];
   return (
      <div className='flex my-2'>
			<div>
				<Icon src={effect.src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{effect.name}</h3>
			</div>
			<div className='my-auto flex-0'>
				<AddButton />
			</div>
			<div className='flex-1 my-auto ml-2'>
            <p className='text-sm leading-none text-center text-slate-500'>{effect.summary}</p>
			</div>
			{/* <div className='flex-1 my-auto'>
         <p className='text-sm leading-none text-center text-slate-500'>{effect.poisonEffect}</p>
			</div> */}
		</div>
   )
}