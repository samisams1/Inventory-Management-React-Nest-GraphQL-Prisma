import { Store } from '@prisma/client';
import { UpdateStoreInput } from './Dto/update-store-input';
import { StoreService } from './store.service';
export declare class StoreResolver {
    private readonly storeService;
    constructor(storeService: StoreService);
    store(id: number): Promise<{
        id: number;
        productId: number;
        userId: number;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    stores(): Promise<Store[]>;
    updateStore(input: UpdateStoreInput[]): Promise<Store[]>;
}
