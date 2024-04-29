"use client"

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client"
import { Separator } from "@radix-ui/react-separator";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SettingsFormProps {
    initialData: Store;
}

const formSchema = z.object({
    name: z.string().min(1),
})

type SettingsFormValues = z.infer<typeof formSchema>;


export const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const onSubmit = async (values: SettingsFormValues) => {
        console.log(values);
    }

    return (
        <>
            <div className=" flex items-center justify-between ">
                <Heading
                    title="Configuracion"
                    subtitle="Configura tu tienda en linea"
                />
                <Button
                    variant={"destructive"}
                    size={"sm"}
                    onClick={() => { }}
                >
                    <Trash className=" h-4 w-4" />
                </Button>
            </div>
            <Separator />
        </>

    )
}
