import React from 'react';
import { rem, rgba } from 'polished';
import { css } from 'emotion';
import styled from 'react-emotion';
import Title from '../atoms/Title';
import Content from '../molecules/Content';
import Wrapper from '../layout/Wrapper';
import { mqMin, mqMax } from '../../styles/breackpoint';
import * as font from '../../styles/fonts';
import * as color from '../../styles/colors';

const ColText = styled('div')`
  ${mqMin[1]} {
    padding: ${rem(200)} 0;
  }
  ${mqMin[1]} {
    position: relative;
    z-index: 1;
    width: 50%;
  }
`;

const ColImage = styled('div')`
  position: relative;
  ${mqMax[1]} {
    margin-top: ${rem(30)};
    order: 666 !important;
  }
  ${mqMin[1]} {
    width: 50%;
    padding: ${rem(60)} 0;
    img {
      width: 100%;
    }
  }
`;

const Subtitle = styled('div')`
  text-transform: uppercase;
  font-weight: ${font.weightBold};
  font-size: ${rem(20)};
`;

const SectionTitle = styled(Title)`
  display: inline-block;
  position: relative;
  font-size: ${font.XXL};
  ${[mqMin[2]]} {
    font-size: ${font.XXXL};
  }
  &:after {
    content: '';
    display: block;
    width: ${rem(170)};
    height: ${rem(26)};
    position: absolute;
    opacity: 0.28;
    top: ${rem(18)};
    right: ${rem(-30)};
    border-radius: ${rem(2)};
    ${[mqMin[1]]} {
      top: ${rem(18)};
      right: ${rem(33)};
      height: ${rem(28)};
    }
    ${[mqMin[2]]} {
      top: ${rem(22)};
      height: ${rem(30)};
    }
  }
`;

const Comet = styled('div')`
  ${mqMax[2]} {
    display: none;
  }
  position: absolute;
  height: ${rem(60)};
  width: ${rem(500)};
  border-radius: ${rem(666)};
  margin-top: ${rem(-60)};
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${rem(666)};
  }
  &:after {
    content: '';
    display: block;
    width: ${rem(60)};
    height: ${rem(60)};
    border: 4px solid;
    border-radius: ${rem(666)};
    position: absolute;
    top: 0;
    opacity: 0.8;
  }
`;

const Section = styled('div')`
  overflow: hidden;
  ${mqMax[1]} {
    padding: ${rem(50)} 0;
  }
  &:nth-child(odd) {
    ${ColText} {
      ${mqMin[1]} {
        padding-left: ${rem(30)};
      }
    }
    ${ColImage} {
      order: -1;
      ${mqMin[1]} {
        padding-right: ${rem(30)};
      }
    }
    ${Comet} {
      right: 0;
      transform: translateX(10vw) translateY(${rem(160)});
      &:after {
        left: 0;
      }
      &:before {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.95)
        );
      }
    }
  }
  &:nth-child(even) {
    ${ColText} {
      ${mqMin[1]} {
        padding-right: ${rem(30)};
      }
    }
    ${ColImage} {
      ${mqMin[1]} {
        padding-left: ${rem(30)};
      }
    }
    ${Comet} {
      transform: translateX(-10vw) translateY(${rem(160)});
      &:after {
        right: 0;
      }
      &:before {
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.95)
        );
      }
    }
  }
  &:nth-child(3n + 1) {
    ${Subtitle} {
      color: ${color.clr2};
    }
    ${SectionTitle} {
      &:after {
        background: ${color.clr2};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr2, 0.2)};
      &:after {
        border-color: ${color.clr2};
      }
    }
  }
  &:nth-child(3n + 2) {
    ${Subtitle} {
      color: ${color.clr3};
    }
    ${SectionTitle} {
      &:after {
        background: ${color.clr3};
        left: 0;
      }
    }
    ${Comet} {
      background: ${rgba(color.clr3, 0.2)};
      &:after {
        border-color: ${color.clr3};
      }
    }
  }
  &:nth-child(3n + 3) {
    ${Subtitle} {
      color: ${color.clr4};
    }
    ${SectionTitle} {
      &:after {
        background: ${color.clr4};
      }
    }
    ${Comet} {
      background: ${rgba(color.clr4, 0.2)};
      &:after {
        border-color: ${color.clr4};
      }
    }
  }
`;

const Presentation = ({ data, ...rest }) => {
  return (
    <div {...rest}>
      {data &&
        data.map((item, index) => (
          <Section key={item.title}>
            <Wrapper
              className={css({
                display: 'flex',
                flexDirection: 'column',
                [mqMin[1]]: {
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              })}
            >
              <ColText>
                {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
                {item.title && (
                  <SectionTitle>
                    <div
                      className={css({
                        position: 'relative',
                        zIndex: 1,
                      })}
                    >
                      {item.title}
                    </div>
                  </SectionTitle>
                )}
                {item.content && (
                  <Content
                    dangerouslySetInnerHTML={{ __html: item.content.html }}
                    className={css`
                      margin-top: ${rem(20)};
                    `}
                  />
                )}
                <Comet />
              </ColText>
              <ColImage>
                {item.image.url && (
                  <img
                    src={item.image.url}
                    alt=""
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                )}
              </ColImage>
            </Wrapper>
          </Section>
        ))}
    </div>
  );
};

export default Presentation;
