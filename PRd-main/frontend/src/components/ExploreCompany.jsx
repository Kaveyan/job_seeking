import React from 'react'
import Google1 from '../images/Google1.png';
import Amazon from '../images/amazon.jpg';
import Salesforce from '../images/Salesforce.jpg';
import Microsoft from '../images/Microsoft.png';
import ExploreByCompany from './ExploreByCatetory';
import HowWorks from './HowWorks';


function ExploreCompany() {
  return (
    <div className='explore-company'>
        <div className='company-helped'>
            <h2>Companies <br/>we helped grow</h2>
            <img src={Google1} alt="" srcset="" />
            <img src={Microsoft} alt="" srcset="" />
            <img src={Amazon} alt="" srcset="" />
            <img src={Salesforce} alt="" srcset="" />

        </div>
        <div className='explore-by-catefory'>
                <ExploreByCompany/>
        </div>
        <div className='how-works'>
            <HowWorks/>
        </div>
    </div>
  )
}

export default ExploreCompany
