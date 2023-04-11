import EffectsData from "../../EffectsData";

export default function CounterEffect(props) {
   let warning = '';
   props.counterEffects.forEach((counterEffect) => {
      EffectsData.forEach((effect) => {
         if (effect.counterEffect === counterEffect) {
            warning += `The ${effect.name} effect is being countered by the ${counterEffect} effect.\n`;
         }
      })
   })
   
   return (
      <p className='text-sm text-center text-red-500' style={{ textShadow: "red 0 0 0.5px" }}>
         {warning}
      </p>
   )
}