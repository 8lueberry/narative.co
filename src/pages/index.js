import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../styles/media'

const PageContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: ${props => props.theme.colors.bg};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  height: 91vh;

  ${media.large`
    grid-template-columns: repeat(2, 1fr [col-start]);
  `};
`

const LogoImage = styled.img`
  max-width: 16rem;
  margin-bottom: 1rem;

  ${props =>
    props.animation !== 'start' &&
    `
    opacity: 0;
    transform: translate3d(0, 1.4rem, 0);
  `};

  transition: opacity 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1),
    color 300ms cubic-bezier(0.694, 0, 0.335, 1),
    transform 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1);

  ${media.large`
    margin-bottom: 2rem;
    font-size: 16rem;
  `};
`
const NarativeMarkImage = styled.img`
  height: 53rem;
  position: relative;
  top: -4rem;
  transition: all 400ms ${props => props.theme.transitions.easeIn};
  transition-delay: 300ms;
  opacity: ${props => (props.hasLoaded ? '1' : '0')};

  ${media.large`
    height: 53rem;
  `};
`

const WelcomeHeader = styled.h1`
  color: ${props => props.theme.colors.grey};
  font-size: 1.8rem;

  ${props =>
    props.animation !== 'start' &&
    `
    opacity: 0;
    transform: translate3d(0, 1.4rem, 0);
  `};

  transition: opacity 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1),
    color 300ms cubic-bezier(0.694, 0, 0.335, 1),
    transform 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1);
  transition-delay: 888ms;

  ${media.large`
    font-size: 3.6rem;
    margin-bottom: 2rem;
  `};
`

const ContactText = styled.p`
  font-size: 4.8rem;
  font-weight: 500;
  display: none;

  ${props =>
    props.animation !== 'start' &&
    `
    opacity: 0;
    transform: translate3d(0, 1.4rem, 0);
  `};

  color: ${props => props.theme.colors.grey};
  transition: opacity 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1),
    color 300ms cubic-bezier(0.694, 0, 0.335, 1),
    transform 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1);
  transition-delay: 888ms;

  ${media.large`
    display: block;
  `};
`

const MainText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  display: none;

  ${props =>
    props.animation !== 'start' &&
    `
    opacity: 0;
    transform: translate3d(0, 1.4rem, 0);
  `};

  color: ${props => props.theme.colors.grey};
  transition: opacity 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1),
    color 300ms cubic-bezier(0.694, 0, 0.335, 1),
    transform 700ms 200ms cubic-bezier(0.694, 0, 0.335, 1);
  transition-delay: 888ms;

  ${media.large`
    display: block;
  `};
`

const ContactLink = styled.a`
  font-size: 4.8rem;
  font-weight: 500;
  color: #a0a4a9;
  text-decoration: underline;
`

const ContactLinkMobile = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23rem;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #000;
  background: #fff;
  text-align: center;

  margin: 5rem 0;

  ${media.large`
    display: none;
  `};
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 53rem;
  text-align: center;

  ${media.large`
    text-align: left;
    max-width: 36rem;
  `};
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.large`
    justify-content: flex-end;
  `};
`

const CopyRightContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => props.theme.colors.grey};
  text-align: center;

  ${media.large`
    text-align: left;
  `};
`

class IndexPage extends Component {
  state = { animation: '', image: 'loading' }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: 'start' })
    }, 300)

    this.mark.props.onLoad(this.handleImageLoaded())
  }

  handleImageLoaded = () => {
    setTimeout(() => {
      this.setState({ image: 'loaded' })
    }, 300)
  }

  handleImageErrored = () => {
    this.setState({ image: 'failed to load' })
  }

  render() {
    const { animation, image } = this.state

    return (
      <PageContainer>
        <GridContainer>
          <LeftContainer>
            <LogoImage
              animation={animation}
              src={withPrefix('/images/logo/narative-logo-white.svg')}
              alt="Narative logo white"
              onLoad={this.handleImageLoaded}
              ref={img => (this.mark = img)}
              onError={this.handleImageErrored}
            />
            <div>
              <WelcomeHeader animation={animation}>
                Some things are worth the wait.
              </WelcomeHeader>
              <MainText animation={animation}>
                We’re Narative! And no, we did not misspell it. Narative is a
                digital-first design studio that is all about reducing the noise
                and unnecessary details—using classical techniques with state of
                the art technologies, we help you solve your problems, grow your
                business and simply tell your story.
              </MainText>
              <ContactText animation={animation}>
                contact us for{' '}
                <ContactLink href="mailto:info@narative.co?Subject=👋%20Narative">
                  more info
                </ContactLink>.
              </ContactText>
            </div>
            <CopyRightContainer>
              © {new Date().getFullYear()} Studio Narative Inc.
            </CopyRightContainer>
          </LeftContainer>
          <RightContainer>
            <NarativeMarkImage
              hasLoaded={image === 'loaded'}
              src={withPrefix('/images/mark/waves/waves.png')}
            />
            <ContactLinkMobile href="mailto:info@narative.co?Subject=👋%20Narative">
              contact us
            </ContactLinkMobile>
          </RightContainer>
        </GridContainer>
      </PageContainer>
    )
  }
}

export default IndexPage
