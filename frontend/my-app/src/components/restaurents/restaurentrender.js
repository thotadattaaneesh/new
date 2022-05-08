

import React from "react";
import testamonials from "./rest";
import RenderTests from "./displayrests";
import {Row, Col} from "react-bootstrap";
function Rest(props) {
                return <RenderTests 
                        id= {props.id} 
                        imgsrc={props.profile} 
                        name={props.name} 
                    /> 
      
}

function restimonials() {
    return (<>{testamonials.map(Rest)}                 
    </>
         );
}

export default restimonials
