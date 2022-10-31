import React from 'react'
import PropTypes from 'prop-types'


function Card({children, reverse}) {
//   return (
//     <div className={`card ${reverse && "reverse"}`}>
//       {children}
//     </div>
//   )

    const cardStyles = {
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "black"
    }


    return (
        <div className='card' style={cardStyles}>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node
}

export default Card
