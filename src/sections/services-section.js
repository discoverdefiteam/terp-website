import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import PiechartSection from "./piechart-section";

import { Parallax } from 'react-scroll-parallax';

const menu = require('../contents/urls.json');

export function ServicesSection() {
        return (
            <section className={'services-section'}>
                <div className={'section-bg'}/>
                <div className={'container'}>
                    <div className={'row'} data-masonry='{"percentPosition": true }'>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service cosmostation'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Fully Non-Custodial</div>
                                    <div className={'text-box'}>Not your keys, not your coins.</div>
                                    <div className={'text-box'}>Skip the middleman and enjoy a seamless connection between you and what you value.</div>
                                    <br/>
                                    <div className={'row'}>
                                        <div className={'col-auto py-4'}>
                                            <a href={menu.keplr} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Install Keplr</button>
                                            </a>
                                            <a href={menu.leap} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Install Leap</button>
                                            </a>
                                            <a href={menu.snaps} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Install Metamask Snaps</button>
                                            </a>
                                        </div>
                                        <div className={'col-auto'}>
                                            <a href={menu['keplr-use']} target={'_blank'} rel={'noreferrer'}>
                                                <div className={'link'}><i className={'icon-arrow-right'}></i>How to use it?</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'service staking-terp'}
                                 data-sal="slide-up"
                                 data-sal-delay="200"
                                 data-sal-duration="1000">
                                <div className={'inner'}>
                                    <div className={'title'}>Staking To Ensure</div>
                                    <div className={'text-box'}>
                                        Terp Network is a proof-of-stake blockchain, meaning users stake their funds, which contributes to ensure the mimimum expected voting power required for the network to produce blocks. <br/><br/>Users who stake can earn rewards after each new block and at any time, stakers can claim their accumulated rewards via their wallet.
                                        <ul>
                                            <li>Secure the Network</li>
                                            <li>Earn Staking Rewards</li>
                                            <li>Govern the Network</li>
                                        </ul>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-auto'}>
                                            <a href={menu['staking-terp']} target={'_blank'} rel={'noreferrer'}>
                                                <button type={'button'}>Learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
               
                    </div>

                    <div className={'row pt-md-5 align-items-center'}>
                        <div className={'col-12 col-md-6 pe-md-5'}>
                            <Parallax translateY={['100px', '0px']}>
                                    <StaticImage
                                        src={'../images/junoswap.png'}
                                        alt={'Smart Contracts'}
                                        width={827}
                                        height={781}
                                        placeholder="blurred"
                                    />
                            </Parallax>
                        </div>
                        <div className={'col-12 col-md-12 col-lg-5 pe-lg-4 z-index-front'}>
                            <h3
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-duration="1000">
                                Easy access to Decentralized Exchanges
                            </h3>
                            <div className={'text-box pe-5'}
                                 data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                Swap & LP your Terp on various Interchain DEXs.
                            </div>
                            <div className={'row mt-4'}
                                 data-sal="fade"
                                 data-sal-delay="600"
                                 data-sal-duration="1000">
                                <div className={'col-5 pb-3'}>
                                    <a href={menu.osmosis} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>Osmosis DEX</button>
                                    </a>
                                </div>
                                <div className={'col-5 pb-3'}>
                                    <a href={menu.fun} target={'_blank'} rel={'noreferrer'}>
                                        <button type={'button'}>ibc.fun</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <PiechartSection/>

                </div>
            </section>
        );
}

export default ServicesSection;
