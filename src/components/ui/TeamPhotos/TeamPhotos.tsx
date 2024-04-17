import Image from "next/image";
import {
  ItemPhoto,
  TeamPhotosMain,
  TeamPhotosSection,
  TeamPhotosThumbnail,
  TeamPhotosWrapper,
} from "./styles";
import TeamsPhotos from "@/styles/assets/teamphotomain.png";
export const TeamPhotos = () => {
  return (
    <TeamPhotosWrapper>
      <TeamPhotosSection>
        <TeamPhotosMain>
          <ItemPhoto>
            <Image src={TeamsPhotos} alt="" width={1248} height={628} />
          </ItemPhoto>
        </TeamPhotosMain>
        <TeamPhotosThumbnail>
          <ItemPhoto>
            <Image src={TeamsPhotos} alt="" width={392} height={250} />
          </ItemPhoto>
          <ItemPhoto>
            <Image src={TeamsPhotos} alt="" width={392} height={250} />
          </ItemPhoto>
          <ItemPhoto>
            <Image src={TeamsPhotos} alt="" width={392} height={250} />
          </ItemPhoto>
        </TeamPhotosThumbnail>
      </TeamPhotosSection>
    </TeamPhotosWrapper>
  );
};

TeamPhotos.displayName = "TeamPhotos";
