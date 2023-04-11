import PotionEffects from './Effects/PotionEffects';
import Ingredients from './Ingredients/Ingredients';

export default function Selections(props) {
   return (
      <>
         {props.viewingByPotions && <PotionEffects />}
         {!props.viewingByPotions && <Ingredients />}
      </>
   )
}