import React from 'react'
import Card from 'react-bootstrap/Card'

export default function BusinessCard({businessTitle, backgroundPicture}) {
    const titleStyles = {
      fontSize: "1.5rem",
    }
  
    return (
      <Card className="main-card" bg={'dark'} style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${backgroundPicture}')`}}>
        <Card.Body>
          <Card.Title style={titleStyles} className="business-title">{businessTitle}</Card.Title>
        </Card.Body>
      </Card>
    )
}
