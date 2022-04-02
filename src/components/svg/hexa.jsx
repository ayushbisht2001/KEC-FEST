import './styles/hexa.css';

const hexaVariant = {
    green : "linear-gradient(to bottom right, #cddc39 0%, #8bc34a 100%)",
    yellow : "linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%)",
    golden : "linear-gradient(to bottom right, #e6ce6a 0%, #b7892b 100%)",
    silver : "linear-gradient(to bottom right, #e0e0e0 0%, #bdbdbd 100%)",
    blue : "linear-gradient(to bottom right, #4fc3f7 0%, #2196f3 100%)",
    mint : "linear-gradient(to bottom right, #4db6ac 0%, #00796b 100%)",
    red : "linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%)"

}

const iconVariant = {
    green : " #8bc34a",
    yellow : " #fbc02d",
    golden : " #b7892b",
    silver : " #bdbdbd",
    blue : " #2196f3",
    mint : " #00796b",
    red : "#b71c1c"

}

export const Hexa = (props) =>{

const{
    color = "mint",
    iconClass,
    icon = false,
    hexaBoxStyle = {},
    hexaInnerStyle = {},
    hexaCircleStyle = {}


} = props;

return (

<div className = "hexa-box" style = {hexaBoxStyle} >
    <div className = "hexa-inner"
        style = {{
            background : hexaVariant[color],
            ...hexaInnerStyle
            
        }}

        >
      
    </div>
    <div className = "hexa-circle" 
        style = {
            { color : iconVariant[color] ,
            ...hexaCircleStyle
            }
            } 
            >
        { icon ? 
          icon : 
         <i className = {iconClass} style = {{ color : iconVariant[color] }} ></i>

        }
    </div>

</div>)

}