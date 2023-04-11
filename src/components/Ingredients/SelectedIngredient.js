import RemoveButton from "../UI/RemoveButton";

export default function SelectedIngredient(props) {
	const { id, name, effect1, effect2, effect3, effect4, src } =
		props.ingredient;
	const unmatchedStyle = "text-slate-500";
	const matchedStyle = "text-purple-500";
	const counterEffectStyle = "text-red-500";
	const matchedShadowStyle = { textShadow: "purple 0 0 0.5px" };
	const counterEffectShadowStyle = { textShadow: "red 0 0 0.5px" };
	let shadow1, shadow2, shadow3, shadow4;
	let style1 = unmatchedStyle;
	let style2 = unmatchedStyle;
	let style3 = unmatchedStyle;
	let style4 = unmatchedStyle;

	// Display matching effects
	if (props.matches.includes(effect1)) {
		style1 = matchedStyle;
		shadow1 = matchedShadowStyle;
	}
	if (props.matches.includes(effect2)) {
		style2 = matchedStyle;
		shadow2 = matchedShadowStyle;
	}
	if (props.matches.includes(effect3)) {
		style3 = matchedStyle;
		shadow3 = matchedShadowStyle;
	}
	if (props.matches.includes(effect4)) {
		style4 = matchedStyle;
		shadow4 = matchedShadowStyle;
	}
	// Change style for counter effects
	if (props.counterEffects.includes(effect1)) {
		style1 = counterEffectStyle;
		shadow1 = counterEffectShadowStyle;
	}
	if (props.counterEffects.includes(effect2)) {
		style2 = counterEffectStyle;
		shadow2 = counterEffectShadowStyle;
	}
	if (props.counterEffects.includes(effect3)) {
		style3 = counterEffectStyle;
		shadow3 = counterEffectShadowStyle;
	}
	if (props.counterEffects.includes(effect4)) {
		style4 = counterEffectStyle;
		shadow4 = counterEffectShadowStyle;
	}


	return (
		<div className='flex flex-col items-center flex-1'>
			<div className='w-20 h-20'>
				<div className='absolute -translate-x-6'>
					{id >= 0 && <RemoveButton onClick={props.deselectHandler} />}
				</div>
				<img className='w-full' src={src} alt={name} />
			</div>
			<div className='text-center'>
				<h4 className='underline text-md'>{name}</h4>
				<p className='text-sm leading-none'>
					<span className={style1} style={shadow1}>
						{effect1}
					</span>
					<br />
					<span className={style2} style={shadow2}>
						{effect2}
					</span>
					<br />
					<span className={style3} style={shadow3}>
						{effect3}
					</span>
					<br />
					<span className={style4} style={shadow4}>
						{effect4}
					</span>
				</p>
			</div>
		</div>
	);
}
