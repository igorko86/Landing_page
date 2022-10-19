import { Logo } from '../../../assets/icons/logo';
import { Blog } from '../../../assets/icons/blog';
import { Facebook } from '../../../assets/icons/facebook';
import { Twitter } from '../../../assets/icons/twitter';
import { Linkedin } from '../../../assets/icons/linkedin';
import { Instagram } from '../../../assets/icons/instagram';
import { Youtube } from '../../../assets/icons/youtube';
import Title from '../Title/Title';
import LinkFooter from '../LinkFooter/Title';

import { CopyrightP, FooterDiv, ListWrapper, LogoDiv, SocialNetworkDiv } from './styles';

const MobileFooter = () => {
  return (
    <FooterDiv>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <ListWrapper>
        <div>
          <Title title="Company" />
          <LinkFooter text="About us" />
          <LinkFooter text="Privacy and Security" />
          <LinkFooter text="Press" />
          <LinkFooter text="Blog" />
          <LinkFooter text="Funding" />
          <LinkFooter text="Careers" />
          <LinkFooter text="Team of advisors" />
        </div>
        <div>
          <Title title="Work with us" />
          <LinkFooter text="Our partners" />
          <LinkFooter text="Research Publications" />
        </div>
      </ListWrapper>

      <Title title="Support" />
      <LinkFooter text="Contact us" />
      <LinkFooter text="Crisis Resources" />
      <LinkFooter text="Help Center" />
      <LinkFooter text="User Agreement" />

      <SocialNetworkDiv>
        <a href="landing-page/src/features/Footer/index">
          <Blog />
        </a>
        <a href="landing-page/src/features/Footer/index">
          <Facebook />
        </a>
        <a href="landing-page/src/features/Footer/index">
          <Twitter />
        </a>
        <a href="landing-page/src/features/Footer/index">
          <Linkedin />
        </a>
        <a href="landing-page/src/features/Footer/index">
          <Youtube />
        </a>
        <a href="landing-page/src/features/Footer/index">
          <Instagram />
        </a>
      </SocialNetworkDiv>
      <CopyrightP>&copy; 2005-2021 PatientsLikeMe. All Rights Reserved.</CopyrightP>
      <CopyrightP>Information on PatientsLikeMe.com is reported by our members and is not medical advice.</CopyrightP>
    </FooterDiv>
  );
};

export default MobileFooter;
