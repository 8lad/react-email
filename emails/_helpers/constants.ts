import { SocialMediaLink, StylesType } from "./types";

export const baseTextStyles: StylesType = {
  color: "#5E5E5E",
  fontSize: "24px",
  lineHeight: 1.5,
  fontWeight: 400,
};

export const centeredBlockStyles: StylesType = {
  margin: "0 auto",
};

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    linkUrl: "https://www.facebook.com/leomessi/",
    imageUrl: "https://s.dou.ua/assets/img/facebook2.svg",
    alt: "Facebook social media",
  },
  {
    linkUrl: "https://twitter.com/TeamMessi",
    imageUrl: "https://s.dou.ua/assets/img/x.svg",
    alt: "X social media",
  },
  {
    linkUrl:
      "https://ng.linkedin.com/in/random-user-a9b050235?trk=people-guest_people_search-card",
    imageUrl: "https://s.dou.ua/assets/img/linkedin.png",
    alt: "LinkedIn social media",
  },
  {
    linkUrl: "https://www.instagram.com/leomessi/",
    imageUrl: "https://s.dou.ua/assets/img/instagram.png",
    alt: "Instagram social media",
  },
];
