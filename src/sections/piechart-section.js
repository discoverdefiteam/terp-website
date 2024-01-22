import React from "react";
import PiechartVideoMov from "../videos/piechart.mp4";
import PiechartVideo from "../videos/piechart.webm";
import PiechartPoster from "../videos/piechart.png"
import {useState, useEffect} from "react";

const PiechartSection = () => {
    const [isSafari, setSafari] = useState(false);
    useEffect(() => {
    setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <div className={'row piechart'}>
            <div className={'col-12 col-md-7 pe-md-5'}>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <div className={'chart-text'}>
                            <div className={'text text1'}
                                 data-sal="slide-up"
                                 data-sal-delay="900"
                                 data-sal-duration="1000"
                                 data-sal-easing="ease">
                               (17%) Veg Stage 1:
                                <span>72,974,297.46 $TERP </span>
                                <span>72,974,297.46 $THIOL</span>
                            </div>
                            
                            <div className={'text text3'}
                                 data-sal="slide-up"
                                 data-sal-delay="1100"
                                 data-sal-duration="1000"
                                 data-sal-easing="ease">
                              (15%) Terp Network Foundation DAO:
                                <em>(Vested over 7 years, i.e. non-circulating):</em>
                                <span>63,000,000 $TERP</span>
                                <span>63,000,000 $THIOL</span>
                            </div>
                            <div className={'text text4'}
                                 data-sal="slide-down"
                                 data-sal-delay="900"
                                 data-sal-duration="1000"
                                 data-sal-easing="ease">
                              (63%)  Community Pool:
                                <span>284,025,702.54 $TERP</span>
                                <span>284,025,702.54 $THIOL</span>
                            </div>
                        </div>
                        <video autoPlay={true} loop={false} playsInline={true} muted={true} poster={PiechartPoster}>
                            {isSafari &&
                                <source src={PiechartVideoMov} type='video/mp4;codecs="hvc1"'/>
                            }
                            {!isSafari &&
                                <source src={PiechartVideo} type="video/webm" />
                            }
                        </video>
                    </div>
                </div>
            </div>
            <div className={'col-12 col-md-5 pt-5 pt-md-0'}>
                <h3
                    data-sal="fade"
                    data-sal-delay="200"
                    data-sal-duration="1000">Token Economics</h3>
                <div className={'text-box'}
                     data-sal="fade"
                     data-sal-delay="400"
                     data-sal-duration="1000">
                    <p>Terp Network is a completely community owned and operated smart contract platform.</p>
                    <p>The majority of the genesis supply was stakedropped to atom & bcna holders, committed to the locked community pool, and allocated to the vested development reserve.</p>
                </div>

                <div className={'black-box'}
                     data-sal="fade"
                     data-sal-delay="600"
                     data-sal-duration="1000">
                    <ul>
                        <li>No seed sale, no private sale, no public sale</li>
                        <li>Fairdrop / Stakedrop Genesis launch</li>
                        <li>Genesis supply to 163.000 unique atom & bcna stakers</li>
                        <li>Ownership distribution to Cannabis + Web3 communities</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PiechartSection;
