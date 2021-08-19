//PresidentChild is responsible for displaying the information
//PresidentParent it's responsible for using the map feature and hae it call the child
//Bronze: See if you can display all the presidents first and last name by using the .map
//Silver: Create a filtered Array of so that the child will only display the presidents that are alive (map and filter)
//Gold: Display all presidents that have died and display the age that they did die

import PresidentChild from './PresidentChild';
import { presidentsArray } from './president.constant.js';

function PresidentParent(props){

    return (
    <div>
        <h3>ALL Presidents of the United States</h3>
        {presidentsArray.map(president=> <PresidentChild presidentsArray={president} />)}
        <h3>Presidents Alive</h3>
        {presidentsArray.filter(president=> president.passed === undefined).map(president=> <PresidentChild presidentsArray={president} />)}
        <h3>Deceased Presidents</h3>
        {presidentsArray.filter(president=> president.passed !== undefined).map(president=> <PresidentChild presidentsArray={president} showDeathAge />)}
        <br />
    </div>
    );
};

export default PresidentParent;