import { ItemService } from "./ItemService/ItemService";
import { ListServiceSection, ListServiceWrapper } from "./style";
import ImageService1 from "@/styles/assets/service-1.png";
import ImageService2 from "@/styles/assets/service-2.png";
import ImageService3 from "@/styles/assets/service-3.png";
import ImageService4 from "@/styles/assets/service-4.png";

export const ListService = () => {
  return (
    <ListServiceWrapper>
      <ListServiceSection>
        <ItemService
          title="Set Up"
          content="An all-in-one space with transparent rewards, roles, and discussion for any community."
          imageUrl={ImageService1.src}
        />
        <ItemService
          title="Find Members"
          content="An all-in-one space with transparent rewards, roles, and discussion for any community."
          imageUrl={ImageService2.src}
        />
        <ItemService
          title="Fund Community"
          content="An all-in-one space with transparent rewards, roles, and discussion for any community."
          imageUrl={ImageService3.src}
        />
        <ItemService
          title="Set Up"
          content="An all-in-one space with transparent rewards, roles, and discussion for any community."
          imageUrl={ImageService4.src}
        />
      </ListServiceSection>
    </ListServiceWrapper>
  );
};

ListService.displayName = "ListService";
