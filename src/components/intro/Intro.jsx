import React from "react";
import "./intro.scss";
import { BiRectangle } from "react-icons/bi";
import {FiTriangle} from 'react-icons/fi'
import {BsCircle} from 'react-icons/bs'

export default function Intro() {
  return (
    <div className="container intro-container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="screen">
            <div className="screen-browser bg-dark">
              <div className="screen-circle"></div>
              <div className="screen-circle"></div>
              <div className="screen-circle"></div>
            </div>
            <div className="intro-box">
              <div className="intro-head ">
                <h2>Kaivalya - 2k22</h2>
              </div>
              <div className="intro-content">
                <p>
                  <code>
                    Geographically, we are located amidst the hills of North
                    India. To some, we might merely be a valley in the Himalayas
                    but we speak Technology. We are the Coding Club of BTKIT
                    Dwarahat, Uttarakhand and we proudly present Kaivalya 2022.
                    Bipin Tripathi Kumaon Institute of Technology, Dwarahat is a
                    Technical Institute of Uttarakhand Government that is
                    situated near the hills of District Almora. “Kaivalya” is
                    the annual technical fest organized by the Coding Club of
                    BTKIT Dwarahat which is supported by BTKIT IEEE Student
                    Branch.
                  </code>
                </p>

                <p>
                  <code>
                    After the grand success and the overwhelming response to
                    “Kaivalya 2014, 2015, 2018,2019”, the only option we had was
                    to make it bigger and better without compromising the
                    convenience of participation and we have focussed on doing
                    exactly that. All the major events of Kaivalya 2022 will be
                    hosted online and will be free to participate. The rewards
                    have become more exciting and the challenges more promising.
                    The speciality with Kaivalya 2022 is that we, the
                    organizers, not only treat it as an event for you to
                    interact with us but also for us to mingle up with you. In
                    fact, it all started as a dream, and it eventually has
                    become a community.
                  </code>
                </p>
                <p>
                  <code>
                    “Kaivalya 2022” is scheduled to be organized in the mid of
                    April 2022. For the convenience of anyone in the world to
                    participate, we have made the major events of Kaivalya
                    including the signature event “Gambit” online. The minor
                    events will however be conducted only onsite. With exciting
                    prizes and no participation fees, and the convenience of
                    participating just with an internet connection from anywhere
                    in the world, you have nothing to lose. So, find the event
                    that suits you the most, enroll yourself and gear up,
                    because the challenges are only going to get better and
                    harder.
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-4 d-flex  align-items-center">
          <div className="why-k">
            <div className="mob-screen">
              <div className="mob-screen-browser bg-dark">
                <div className="mob-screen-circle"></div>
              </div>
              <div className="intro-box">
                <div className="intro-head ">
                  <h2>Why Kaivalya - 2k22 ? </h2>
                </div>
                <div className="intro-content">
                  <p>
                    <code>
                      The motive of “Kaivalya” is to find developers among
                      college students because Kaivalya is (and always will be)
                      free and online, it will always attract plenty of young
                      developers, from communities like codechef.com and
                      hackerearth.com. “Gambit 2014” was the signature event of
                      “Kaivalya 2014” and it being a very novice start up at
                      that time received the participation of 174 teams from
                      India. Same success happens in 2015, 2018 and 2019 and we
                      are planning to make it again in 2022. Besides, online
                      participation, BTKIT Dwarahat also is a source of huge
                      onsite participation. Not only are the competitions
                      organized but a lot of workshops are done by senior
                      students and faculty members for juniors so that their
                      interest in the computer science field increases.
                    </code>
                  </p>
             
                </div>
              
              </div>

              <div className="mob-footer">
                  <FiTriangle/>
                  <BsCircle/>
                  <BiRectangle/>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
