"use client"
import { Store } from "@prisma/client"
import { Popover, PopoverTrigger } from "./ui/popover"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Store as StoreIcon} from "lucide-react";
import { cn } from "@/lib/utils";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {

  items: Store[];

};



function StoreSwitcher({
  className,
  items = []
}: StoreSwitcherProps) {
  const storeModel = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find((item) => item.value === params.storeId);

  const [open, setOpen] = useState(false);

  const onStoreSelect = (store: { value: string, label: string}) => {
    setOpen(false);
    router.push(`/${store.value}`);

  };

  return (
    <Popover open={open} onOpenChange={setOpen}>

      <PopoverTrigger asChild>
        <Button
        variant={"outline"}
        size={"sm"}
        role="combobox"
        aria-expanded={open}
        aria-label="Store switcher"
        className={cn(
          className,
          "flex items-center"
        )}
        >
          <StoreIcon className=" mr-2 h-4 w-4"/>
        </Button>
      </PopoverTrigger>

    </Popover>
  )
}

export default StoreSwitcher