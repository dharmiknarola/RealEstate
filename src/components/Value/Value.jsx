import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
function Value() {

  return (
    <section className="v-wrapper our-value">
      <div className="paddings innerWidth flexCenter v-container">
        {/* {left side} */}
        <div className="v-left">
          <div className="image-container">
            <img src="./images/building.jpg" alt="value" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To you</span>
          <span className="secondaryText">
            We always be ready to help by providing the best services for you.
            <br />
            We believe a good blace to live can make your life better
          </span>

         
          {console.log("This is accordion item data", data)}
          <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion" >
          {data.map((item, i) => {
            // const [className, setClassName] = useState(null) 
            return (
           
                <AccordionItem className="accordionItem">
                    <AccordionItemHeading>
                       <AccordionItemButton className="flexCenter accordionButton">
                       {/* <AccordionItemState> */}
                            {/* { ({expanded}) => expanded 
                                                ?  setClassName("expanded") 
                                                : setClassName("collapsed")      
                            } */}
                       {/* </AccordionItemState> */}
                       <div className="flexCenter icon">{item.icon}</div>
                       <span className="primaryText">{item.heading}</span>
                       <div className="flexCenter icon">
                         <MdOutlineArrowDropDown size={20} />
                       </div>
                       </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                </AccordionItem>
            );
          })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
