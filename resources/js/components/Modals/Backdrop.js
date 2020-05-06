import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Backdrop(props) {
    let context = useContext(AppContext);
    return (
            <div className="backdrop" onClick={context.uncheckPizzaAndStopPurchasing}></div>
    )
}

export default Backdrop;