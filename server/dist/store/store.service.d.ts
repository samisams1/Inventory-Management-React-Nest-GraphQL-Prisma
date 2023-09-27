import { Store } from '@prisma/client';
import { UpdateStoreInput } from './Dto/update-store-input';
export declare class StoreService {
    private prisma;
    constructor();
    store(id: number): Promise<Store | null>;
    stores(): Promise<Store[]>;
    update(input: UpdateStoreInput[]): Promise<Store[]>;
}
