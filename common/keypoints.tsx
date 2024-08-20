import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { listReset, media, glsp } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import { Card } from "$veda-ui-scripts/components/common/card";
import { CardFooter } from "$veda-ui-scripts/components/common/card/styles";
import { variableGlsp } from '$veda-ui-scripts/styles/variable-utils';
import { ArrowLink } from "./arrow-link";


export const CardList = styled.ol`
  ${listReset()}
  grid-column: 1 / -1;
  display: grid;
  gap: ${variableGlsp()};
  grid-template-columns: repeat(1, 1fr);

  ${media.mediumUp`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.largeUp`
    grid-template-columns: repeat(3, 1fr);
  `}

  > li {
    min-width: 0;
  }
`;

const KeypointsWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: content-start / content-end;

  ${CardFooter} {
    margin-top: auto;
  }
`;

const KeypointCard = styled(Card)`
  ${media.mediumUp`
    font-size: 1.125rem;
  `}
`

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
    <KeypointsWrapper>
      <CardList>
        {
          data.map(datum => {
            return (
              <li>
                <KeypointCard
                  linkLabel={datum.link.text}
                  linkTo={datum.link.url}
                  title={datum.title}
                  description={datum.desc}
                  imgSrc={datum.img.src}
                  imgAlt={datum.img.alt}
                  cardType={cardType}
                  footerContent={ datum.footer ? (
                    <div>
                      <ArrowLink
                        to={datum.footer.link.url}
                      >
                        {datum.footer.link.title}
                      </ArrowLink>
                    </div>
                    )
                    : null
                  }
                />
              </li>
            )
          })
        }
      </CardList>
    </KeypointsWrapper>
  );
}
