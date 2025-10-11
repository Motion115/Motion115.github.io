export interface PubEntrySpec {
  paperTitle: string;
  authors: JSX.Element;
  venueType:
    | "Conference"
    | "Journal"
    | "Workshop"
    | "arXiv"
    | "Pending"
    | "Other"
    | "Competition"
    | "Course"
    | "Research";
  inSelectedCollection: boolean;
  venueShort?: string;
  venueFull: string;
  affiliation?: string;
  awardName?: string;
  awardLink?: string;
  paperLink?: string;
  preprintLink?: string;
  exploreLink?: string;
  codeLink?: string;
  videoLink?: string;
  presentationLink?: string;
  materialLink?: string;
  slidesLink?: string;
  abstractContent?: JSX.Element;
  teaser?: string;
  teaserInteractive?: string;
}