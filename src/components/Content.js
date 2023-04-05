import { useState } from "react";

import Card from "./UI/Card";
import Tabs from "./Tabs";
import Selections from "./Selections";

export default function Content() {
   const [viewingByPotions, setViewingByPotions] = useState(false);

   const ingredientsClickHandler = () => {
      setViewingByPotions(false);
   }

   const potionsClickHandler = () => {
      setViewingByPotions(true);
   }

	return (
		<div className="mx-auto grow">
			<Card>
            <Tabs viewingByPotions={viewingByPotions} ingredientsClickHandler={ingredientsClickHandler} potionsClickHandler={potionsClickHandler} />
            <Selections viewingByPotions={viewingByPotions} />
			</Card>
		</div>
	);
}
