"use client"

import { useStoreModal } from "../../hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal 
        title="Crear una Tienda" 
        description="Agrega una nueva tienda"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            Futuro Form Para tiendas
        </Modal>
    );

}