import ClimatInfo from "@/components/climatInfo/ClimatInfo";
import './globals.css'
import Main from "@/components/section_main/Main";
import Trips from "@/components/trips/Trips";
import MotoTourReviews from "@/components/revews/revews";
import { LocaleText } from "@/components/LocaleText";

export default function Home() {
  return (
    <div>

      <Main />
      <ClimatInfo />
      <Trips />
      <MotoTourReviews />
    </div>
  );
}
