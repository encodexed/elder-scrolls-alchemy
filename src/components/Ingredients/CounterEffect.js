import EffectsData from "../../EffectsData";

export default function CounterEffect(props) {
   let warning1 = '';
   let warning2 = '';
   props.counterEffects.forEach((counterEffect) => {
      EffectsData.forEach((effect) => {
         if (effect.counterEffect === counterEffect) {
            if (warning1 === '') {
               warning1 = `The ${effect.name} effect is being countered by the ${counterEffect} effect.`;
            } else {
               warning2 = `The ${effect.name} effect is being countered by the ${counterEffect} effect.`;
            }
         }
      })
   })
   
   return (
      <p className='text-sm text-center text-red-500' style={{ textShadow: "red 0 0 0.5px" }}>
         {warning1}<br/>
         {warning2}
      </p>
   )
}