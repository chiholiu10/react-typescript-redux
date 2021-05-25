import { FC, memo } from "react";
import { FooterContainer, FooterColumn, FooterTitle, FooterUnorderedList, FooterListItems, Anchor } from './Footer.styles';
import { connect, ConnectedProps } from "react-redux";

export const Footer: FC<FooterProps> = ({ footerData }) => {
  console.log(footerData);
  let footerContent = footerData.map((item: { footer_title: string; footer_links: Array<string>; }, index: number) => (
    <FooterColumn key={index}>
      <FooterTitle>{item.footer_title}</FooterTitle>
      <FooterUnorderedList>
        {item.footer_links.map((text: any, index: number) => (
          <FooterListItems key={index + 1}>
            <Anchor href={text.footer_anchor}>{text.footer_text}</Anchor>
          </FooterListItems>
        ))}
      </FooterUnorderedList>
    </FooterColumn>
  ));

  return (
    <FooterContainer>
      {footerContent}
    </FooterContainer>
  );
};

const mapStateToProps = (state: any) => ({
  footerData: state.media.footerList
});

const connector = connect(mapStateToProps);
type FooterProps = ConnectedProps<typeof connector>;
export default connector((memo(Footer)));