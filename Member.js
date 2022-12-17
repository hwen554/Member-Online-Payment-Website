import React from 'react';
import {Link} from 'react-router-dom';
import {FaFire} from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';

import {Button} from './Button';

zxhzxhzxhzxh
function Member(){
    return (
        <div>
            <div className='pricing__section'>
                <div className='pricing__wraaper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <Link to='/SignUp' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire/>
                                </div>
                                <h3>Member</h3>
                                <h4>$3.99</h4>
                                <h5>per month</h5>
                                <ul className='pricing__container-features'>
                                    <li>Free Activities</li>
                                    <li>Merchants Preferential</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Get this
                                </Button>
                            </div>
                        </Link>
                        <Link to='/SignUp' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFireAlt/>
                                </div>
                                <h3>Member</h3>
                                <h4>$25</h4>
                                <h5>per year</h5>
                                <ul className='pricing__container-features'>
                                    <li>Free Activities</li>
                                    <li>Merchants Preferential</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Get this
                                </Button>
                            </div>
                        </Link>
                        <Link to='/SignUp' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire/>
                                </div>
                                <h3>Member</h3>
                                <h4>$60</h4>
                                <h5>per 3 year</h5>
                                <ul className='pricing__container-features'>
                                    <li>Free Activities</li>
                                    <li>Merchants Preferential</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Get this
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member;
