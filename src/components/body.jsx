import React from 'react'
import './style/body.css'
import { Timeline } from '../data/timeline.js'

export default function Body() {

    //   const [state, setstate] = useState([]);



    return (
        <>
            <div style={{ fontFamily: "Cabin, sans-serif" }} class="container-fluid bg-dark ">
                <div class="row ">
                    <div class="col-md-8 mx-auto">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="main-timeline2">

                                    {
                                        Timeline && Timeline.map(item => {
                                            return (

                                                <>
                                                    <div class="timeline">
                                                        <span class="icon fa fa-globe"></span>
                                                        <p class="timeline-content">
                                                            <h3 class="title">{item.title}</h3>
                                                            <p class="description">
                                                                starts from {item.date} {"  "} {item.time}
                                                            </p>
                                                        </p>
                                                    </div>


                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>)

}


