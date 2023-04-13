import EffectsData from "../../EffectsData";
import AddButton from "../UI/AddButton";
import DisabledAddButton from "../UI/DisabledAddButton";
import Icon from "../UI/Icon";

export default function Effect(props) {
	const effect = EffectsData[props.id - 100];
	const { id, name, src, summary } = effect;

	const selectEffect = () => {
		console.log('selected: ' + id)
		props.selectEffect(id)
	}
   
   return (
      <div className='flex my-2'>
			<div>
				<Icon src={src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{name}</h3>
			</div>
			<div className='my-auto flex-0'>
				{!props.isDisabled && <AddButton onClick={selectEffect} />}
				{props.isDisabled && <DisabledAddButton />}
			</div>
			<div className='flex-1 my-auto ml-2'>
            <p className='text-sm leading-none text-center text-slate-500'>{summary}</p>
			</div>
		</div>
   )
}