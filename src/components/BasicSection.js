import basicInfo from "../data/basicInfo.json";
import BasicInfoCard from "./BasicInfoCard";
import socialMedias from "../data/socialMedias.json";

function BasicSection(props) {
  return (
    <BasicInfoCard
      name={basicInfo.name}
      position={basicInfo.position}
      address={basicInfo.address}
      phone={basicInfo.phone}
      email={basicInfo.email}
      socialMedias={socialMedias}
    />
  );
}
export default BasicSection;
