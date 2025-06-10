import About from "@/components/about/about";
import OurDesc from "@/components/about/our-desc";
import AdmissionEnquiry from "@/components/admission-enquiry";
import Banner from "@/components/banner";
import Branches from "@/components/branches";
import Video from "@/components/video";
import AccountDetails from "@/components/academics/account-details";

export default function Home() {
  return (
    <main className="">
      <Banner
        source="/assets/image/A C.jpg"
        title="About School"
        description="Beershiva - Chaukhutiya"
      />
      <About />
      <OurDesc />
      <AccountDetails />
      <Branches />
      <Video source="/assets/image/about1.mp4" />
      <AdmissionEnquiry />
    </main>
  );
}
