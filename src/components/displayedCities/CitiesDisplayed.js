import DubaiTime from "./DubaiTime";
import VancouverTime from "./VancouverTime";
import WarsawTime from "./WarsawTime";

export default function CitiesDisplayed() {
  return (
    <div>
      <WarsawTime />
      <DubaiTime />
      <VancouverTime />
    </div>
  );
}
