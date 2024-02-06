"use client"

import { z } from "zod"
import { useStoreModal } from "../../hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";

const formSchema = z.object({
    name: z.string().min(3, {message: "El nombre debe tener al menos 3 caracteres"}),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
            },
        }
    );

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Modal
            title="Crear una Tienda"
            description="Agrega una nueva tienda"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className=" space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>name</FormLabel>
                                        <FormControl>
                                            <input
                                                type="text"
                                                placeholder="Nombre de la tienda"
                                                {...field}
                                                className="w-full"
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className=" pt-6 space-x-2 flex items-center justify-end w-full">
                                    <Button onClick={storeModal.onClose} variant={"outline"}>Cancelar</Button>
                                    <Button type="submit">Continuar</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>

        </Modal>
    );

}