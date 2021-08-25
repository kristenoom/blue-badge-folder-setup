import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
  

const MortyChild = (props) => {
    const {name, status, species, type, gender, image, origin,location} = props.character;

    return(
        <div>
            {/* <h1>Hello from MortyChild component</h1> */}
            <Card>
                <CardImg top width="50%" src={image} alt={name} />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>Status: {status}</CardSubtitle>
                    <CardText>
                        Location/Dimension: {location.name}<br />
                        Origin/Planet: {origin.name}<br />
                        Gender: {gender}<br />
                        Species: {species}<br />
                        Type: {type}
                    </CardText>
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
        </div>
    )
}

export default MortyChild;