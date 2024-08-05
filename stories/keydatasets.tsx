import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { listReset, media, glsp, media } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import { Card } from "$veda-ui-scripts/components/common/card";
import { CardFooter } from "$veda-ui-scripts/components/common/card/styles";
import { variableGlsp } from '$veda-ui-scripts/styles/variable-utils';
import { ArrowLink } from "./arrow-link";

import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";

import featureEmissions from "./media/refinery.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";

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

export default function KeypointsDatasets() {
  return (
    <KeypointsWrapper>
      <CardList>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo=""
            title="Dataset 1"
            description="Dataset 1"
            imgSrc={"https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            imgAlt="image of oil refinery"
            // footerContent={
            //   <div>
            //     <ArrowLink
            //       to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
            //         JSON.stringify({ Topics: "anthropogenic-emissions" })
            //       )}`}
            //     >
            //       Check out relevant datasets
            //     </ArrowLink>
            //   </div>
            // }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo=""
            title="Dataset 2"
            description="Dataset2"
            imgSrc={"https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            imgAlt="image of green wetlands"
            // footerContent={
            //   <div>
            //     <ArrowLink
            //       to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
            //         JSON.stringify({ Topics: "natural-emissions-and-sinks" })
            //       )}`}
            //     >
            //       Check out relevant datasets
            //     </ArrowLink>
            //   </div>
            // }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo=""
            title="Dataset 3"
            description="Dataset 3"
            imgSrc={"https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            imgAlt="image of colorful polygon against satellite landscape surface in brown"
            // footerContent={
            //   <div>
            //     <ArrowLink
            //       to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
            //         JSON.stringify({ Topics: "large-emission-events" })
            //         )}`}
            //         >
            //       Check out relevant datasets
            //     </ArrowLink>
            //   </div>
            // }
          />
        </li>
      </CardList>
    </KeypointsWrapper>
  );
}

export const HomeContent = styled(Hug)`
  padding: ${variableGlsp(2.5, 0)};
  grid-row-gap: ${variableGlsp(2)};

  ${media.mediumUp`
    grid-row-gap: ${variableGlsp(3)};
  `}
`;
