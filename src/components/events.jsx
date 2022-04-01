import React from "react";
import "./style/events.scss";

export default function Events(props) {
  const {
    title,
    id,
    venue,
    date,
    time,
    coordinators,
    desc,
    style,
    cls = "default",
    left,
  } = props.data;

  return (
    <section id={`events-${id}`} style={{ backgroundColor: style.color.bg, color: "white" }} className={`container-fluid event-container ${cls}  `}>
      <div className="row p-2 ">
        <div className= {`col-md-12 col-lg-6 left `} >{left}</div>
        <div className=" col-md-12 col-lg-6 right">
          <div className="d-flex flex-column p-3 justify-content-center align-item-center">
            <h2>{title}</h2>

            <pre className="mt-2 time">
              {" "}
              {date},&nbsp;{time}{" "}
            </pre>
            <pre className="venue"> At {venue} </pre>
            <p className="desc">{desc}</p>
            <div className=" cord-block d-block">
              <p> Coordinators :  </p>
              <ul className="cord">
                {coordinators &&
                  coordinators.map((co) => (
                    <li>
                      <pre>
                        {co.name}, {co.branch} , {co.year}
                      </pre>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
