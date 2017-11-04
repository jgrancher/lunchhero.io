// Externals
import React from 'react';
import { Element } from 'react-scroll';
import { ThemeProvider } from 'styled-components';

// Components
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionHowItWorks from '../components/SectionHowItWorks';
import SectionHowMuch from '../components/SectionHowMuch';
import SectionIntro from '../components/SectionIntro';
import SectionPartners from '../components/SectionPartners';
import SectionStepByStep from '../components/SectionStepByStep';
import SectionWhy from '../components/SectionWhy';

// Styles
import '../styles';
import { spaces } from '../styles/variables';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.position = 0;
    this.ticking = false;
  }

  state = {
    isSticky: false,
  };

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = e => {
    this.position = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.handleStickyHeader(this.position);
        this.ticking = false;
      });

      this.ticking = true;
    }
  };

  handleStickyHeader = position => {
    // console.log('handleStickyHeader', window.scrollY);
    if (!this.state.isSticky && position > 0) {
      this.setState({ isSticky: true });
    }

    if (this.state.isSticky && position === 0) {
      this.setState({ isSticky: false });
    }
  };

  render() {
    return (
      <ThemeProvider theme={{ space: spaces }}>
        <main>
          <Header isSticky={this.state.isSticky} />
          <SectionIntro hasPadding={this.state.isSticky} />
          <Element name="how-it-works">
            <SectionHowItWorks />
          </Element>
          <SectionStepByStep />
          <Element name="how-much">
            <SectionHowMuch />
          </Element>
          <Element name="why">
            <SectionWhy />
          </Element>
          <Element name="partners">
            <SectionPartners />
          </Element>
          <Footer />
        </main>
      </ThemeProvider>
    );
  }
}

export default IndexPage;
