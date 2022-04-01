import React from 'react'
import './style/body.css'
import { Timeline } from '../data/timeline.js'

export default function Body() {

    //   const [state, setstate] = useState([]);



    return (
        <>
            <div class="container-fluid bg-dark ">
                <div className="events">
                    <h1 >Events</h1>
                    <div class="row ">
                        <div class="col-md-8 mx-auto">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-timeline2">

                                        {
                                            Timeline && Timeline.map(item => {
                                                return (
                                                    <>
                                                        <a class="timeline" href={`#events-${item.id}`}>
                                                            <span class="icon fa fa-globe"></span>
                                                            <p class="timeline-content"  >
                                                                <h3 class="title">{item.title}</h3>
                                                                <p class="description"  >
                                                                    starts from {item.date} {"  "} {item.time}
                                                                </p>
                                                            </p>
                                                        </a>
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
            </div>
        </>)

}


