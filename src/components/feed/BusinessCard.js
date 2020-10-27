import React from 'react'
import Card from 'react-bootstrap/Card'

export default function BusinessCard({businessTitle, backgroundPicture}) {
    return (
      <Card bg={'dark'} style={{ width: '18rem', height: '10rem', margin: '0 2rem' }}>
        <Card.Body>
          <Card.Title>{businessTitle}</Card.Title>
        </Card.Body>
      </Card>
    )
}
