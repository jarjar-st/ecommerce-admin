"use client"

import { z } from "zod"
import { useStoreModal } from "../../hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(3, {message: "El nombre debe tener al menos 3 caracteres"}),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState(false);

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
        try {
            setLoading(true);
            const resposne = await axios.post("/api/stores", values);
            toast.success("Tienda creada exitosamente");
            
        } catch (error) {
            toast.error("Ocurrio un error al crear la tienda");

        }finally{
            setLoading(false);

        }
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
                                        <FormLabel>Nombre</FormLabel>
                                        <FormControl>
                                            <input
                                                type="text"
                                                disabled={loading}
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
                                    <Button 
                                    onClick={storeModal.onClose} 
                                    variant={"outline"}
                                    disabled={loading}
                                    >
                                        Cancelar
                                    </Button>

                                    <Button 
                                    type="submit"
                                    disabled={loading}
                                    >
                                        Continuar
                                    </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>

        </Modal>
    );

}