import PotionEffects from "./PotionEffects";
import Ingredients from "./Ingredients";

export default function Selections(props) {
   return (
      <>
         {props.viewingByPotions && <PotionEffects />}
         {!props.viewingByPotions && <Ingredients />}
      </>
   )
}