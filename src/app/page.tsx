import AdmissionEnquiry from "@/components/admission-enquiry";
import Branches from "@/components/branches";
import About from "@/components/home/about";
import Academics from "@/components/home/academics";
import Events from "@/components/home/events";
import Gallery from "@/components/home/gallery";
import HeroSection from "@/components/home/hero-section";
import MissionAndValues from "@/components/home/mission-values";
import ToppersResult from "@/components/home/toppers-result";
import Video from "@/components/home/video";
import Why from "@/components/home/why";
import { server_query_function } from "@/lib/graphql";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const page = async () => {

  const bannerVideoQuery = `
  query MyQuery {
 homes {
   homeVideoBanner {
     url
   }
 }
}

 `;
 const videoBanner = (await server_query_function(
   bannerVideoQuery
 )) as homeBannerType;

 
type homeBannerType = {
  homes: {
    homeVideoBanner: {
      url: string;
    }[];
  }[];
};


 const featuredNewsQuery = `
query MyQuery {
 newsEvents(where: {featured: true}) {
   id
   newsHeading
   newsImage {
     url
   }
 }
}
`;

type NewsEventType = {
  newsEvents: Array<{
    id: string;
    newsHeading: string;
    newsImage: {
      url: string;
    };
  }>;
};


const featuredResponse = (await server_query_function(
  featuredNewsQuery
)) as NewsEventType;




  const query = `
  query MyQuery {
  chaukhutiyaBlogs {
    id
    mainImage {
      url
    }
     title
    slug
    shortDesc
  }
   chaukutiyaHomes {
    event {
      id
      day
      eventName
    }
  }
}

`;

  const res = (await server_query_function(query)) as BlogType;
  console.log(res);

  const query1 = `
query MyQuery {
  chaukutiyaHomes {
    homeGallery {
      homeGalleryImage {
        url
      }
    }
  }
}
  `;

  const response = (await server_query_function(query1)) as HomeType;

  return (
    <>
      <HeroSection video={videoBanner.homes} />
      <Video featured={featuredResponse.newsEvents} />
      <About />
      <MissionAndValues />
      <Academics />
      <Why />
      <ToppersResult />
      <Branches />
      <Gallery
      //@ts-expect-error
        image={response?.chaukutiyaHomes[0]?.homeGallery?.homeGalleryImage}
      />
      <Events blogs={res.chaukhutiyaBlogs} events={res.chaukutiyaHomes[0]?.event} />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
