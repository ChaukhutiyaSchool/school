type TopperImageType = {
  url: string;
};

type TopperDetailsType = {
  id: string;
  name: string;
  percentage: number;
  subject: string;
  topperImage: TopperImageType;
};

type TopperType = {
  class: string;
  id: string;
  topperDetails: TopperDetailsType[];
};

type homeGallery = {
  homeGalleryImage: {
    url: string;
  }[];
}[];

type HomeType = {
  chaukhutiyaHomes: {
    toppers: TopperType[];
    homeGallery: homeGalleryType;
  }[];
};

type Blog = {
  id: string;
  mainImage: {
    url: string;
  };
  title: string;
  slug: string;
  shortDesc: string;
};

type SchoolEvent = {
  id: string;
  day: string;
  eventName: string;
};
type BlogType = {
  chaukhutiyaBlogs: Blog[];
  chaukutiyaHomes: {
    event: SchoolEvent[];
  }[];
};

type SingleBlogType = {
  chaukhutiyaBlogs: {
    id: string;
    mainImage: {
      url: string;
    };
    title: string;
    shortDesc: string;
    slug: string;
    content: htm;
  }[];
};

type galleryType = {
  chaukhutiyaImageGalleries: {
    imageGallery: {
      imageCategoryName: string;
      image: {
        url: string;
      }[];
    }[];
  }[];
};

type DisclosureType = {
  id: string;
  title: string;
  url: string;
}[];
