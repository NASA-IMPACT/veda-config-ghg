import React from "$veda-ui/react";
import { Link } from '$veda-ui/react-router-dom';

import {
  Card, 
  CardHeader,
  CardBody,
  CardMedia,
  CardGroup,
} from '$veda-ui/@trussworks/react-uswds';

import "./styles.scss"


type Data = {
  title: string;
  desc: string;
  img: {
    src: string;
    alt: string;
  };
  link: {
    url: string;
    text: string;
  };
  footer: {
    link: {
      title: string;
      url: string;
    };
  } | null;
};


interface KeypointsProps {
  data: Data[],
  cardType?: string
}

export default function Keypoints({
  data,
  cardType = "classic"
}: KeypointsProps) {
  return (
    
    <CardGroup>
      {data.map(datum => (
        <Card
          key={datum.title}
          gridLayout={{ tablet: { col: 4 } }}
          className="padding-bottom-0"
          containerProps={{
            className: `border-0 position-relative card-shadow__hover margin-top-4 margin-right-2 ${cardType === 'cover' ? 'card__cover' : ''}`,
          }}
        >
          <CardMedia imageClass="height-card-lg">
            <img src={datum.img.src} alt={datum.img.alt} />
          </CardMedia>
          <div className="card__body">
            <CardHeader>
              <h3 className="usa-card__heading">{datum.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="padding-bottom-2">{datum.desc}</p>
            </CardBody>
          </div>
          <Link className="position-absolute top-0 left-0 width-full height-full blocklink" to={datum.link.url} />
        </Card>
      ))}
    </CardGroup>
    
  );
}
