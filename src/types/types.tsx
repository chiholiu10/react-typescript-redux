export interface Media {
  channel: {
    name: string;
    image: string;
  },
  name: string;
  next: {
    name: string;
    time: string;
  };
}

export interface Navbar {
  anchor: string;
  name: string;
}

export interface FooterLinks {
  footer_text: string;
  anchor: string;
}

export interface Footer {
  footer_title: string;
  footer_links: FooterLinks[];
}

export interface LiveTvTypes {
  liveTvData: Media[];
}

export interface LiveRadioTypes {
  liveRadioData: Media[];
}

export interface NavbarTypes {
  navbarData: Navbar[];
}

export interface FooterTypes {
  footerData: Footer[];
}