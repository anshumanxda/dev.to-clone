import HomeSvg from "assets/images/home.svg";
import ReadingListSvg from "assets/images/readingList.svg";
import ListingSvg from "assets/images/listing.svg";
import PodcastSvg from "assets/images/podcast.svg";
import VideosSvg from "assets/images/videos.svg";
import TagsSvg from "assets/images/tags.svg";
import FaqSvg from "assets/images/faq.svg";
import ForemShopSvg from "assets/images/foremShop.svg";
import SponsorsSvg from "assets/images/sponsors.svg";
import AboutSvg from "assets/images/about.svg";
import ContactSvg from "assets/images/contact.svg";
import GuidesSvg from "assets/images/guides.svg";
import SoftwareComparisonsSvg from "assets/images/softwareComparisons.svg";
import CodeOfConductSvg from "assets/images/codeOfConduct.svg";
import PrivacyPolicySvg from "assets/images/privacyPolicy.svg";
import TermsOfUseSvg from "assets/images/termsOfUse.svg";

const url = "https://dev.to/";

export const SIDEBAR_DATA = [
  {
    title: "Home",
    icon: <HomeSvg />,
    link: "/",
  },
  {
    title: "Reading List",
    icon: <ReadingListSvg />,
    link: "/",
  },
  {
    title: "Listings",
    icon: <ListingSvg />,
    link: "/listings",
  },
  {
    title: "Podcasts",
    icon: <PodcastSvg />,
    link: `${url}pod`,
  },
  {
    title: "Videos",
    icon: <VideosSvg />,
    link: "/",
  },
  {
    title: "Tags",
    icon: <TagsSvg />,
    link: `${url}tags`,
  },
  {
    title: "FAQ",
    icon: <FaqSvg />,
    link: `${url}faq`,
  },
  {
    title: "Forem Shop",
    icon: <ForemShopSvg />,
    link: "https://shop.forem.com/",
  },
  {
    title: "Sponsors",
    icon: <SponsorsSvg />,
    link: `${url}sponsorships`,
  },
  {
    title: "About",
    icon: <AboutSvg />,
    link: `${url}about`,
  },
  {
    title: "Contact",
    icon: <ContactSvg />,
    link: `${url}contact`,
  },
  {
    title: "Guide",
    icon: <GuidesSvg />,
    link: `${url}guides`,
  },
  {
    title: "Software Comparisons",
    icon: <SoftwareComparisonsSvg />,
    link: `${url}software-comparisons`,
  },
  {
    title: "Code of Conduct",
    icon: <CodeOfConductSvg />,
    link: `${url}code-of-conduct`,
  },
  {
    title: "Privacy Policy",
    icon: <PrivacyPolicySvg />,
    link: `${url}privacy`,
  },
  {
    title: "Terms of Use",
    icon: <TermsOfUseSvg />,
    link: `${url}terms`,
  },
];
