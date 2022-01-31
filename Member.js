import React from 'react';
import {Link} from 'react-router-dom';

import {Button} from './Button';


function Member(){
    return (
    <>
    
    <div>
        <div className='Pricing_section'>
            <div className='Pricing_wrapper'>
                <h1 className='Pricing_heading'>Pricing</h1>
                <div className='Pricing_container'>
                    <Link to='/register' className='Pricing_container-card'>
                        <div className='Pricing_container-cardInfo'>
                            <div className='icon'>
                                
                            </div>
                            <h3>AUCSSMember</h3>
                            <h4>$2.99</h4>
                            <p>Per Month</p>
                            <ul className='Pricing_container-features'>
                                <li>商家折扣</li>
                                <li>会员专属铭牌</li>
                                <li>AUCSS活动免费参与</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>CHOOSE</Button>
                        </div>
                    </Link>
                    <Link to='/register' className='Pricing_container-card'>
                        <div className='Pricing_container-cardInfo'>
                            <div className='icon'>
                                
                            </div>
                            <h3>AUCSSMember</h3>
                            <h4>$25</h4>
                            <p>Per Year</p>
                            <ul className='Pricing_container-features'>
                                <li>商家折扣</li>
                                <li>会员专属铭牌</li>
                                <li>AUCSS活动免费参与</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>CHOOSE</Button>
                        </div>
                    </Link>
                    <Link to='/register' className='Pricing_container-card'>
                        <div className='Pricing_container-cardInfo'>
                            <div className='icon'>
                                
                            </div>
                            <h3>AUCSSMember</h3>
                            <h4>$12.99</h4>
                            <p>Per Semester</p>
                            <ul className='Pricing_container-features'>
                                <li>商家折扣</li>
                                <li>会员专属铭牌</li>
                                <li>AUCSS活动免费参与</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>CHOOSE</Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Member;