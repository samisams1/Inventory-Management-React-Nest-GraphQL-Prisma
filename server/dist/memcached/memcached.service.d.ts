export declare class MemcachedService {
    private memcached;
    constructor();
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T, expiration: number): Promise<void>;
}
