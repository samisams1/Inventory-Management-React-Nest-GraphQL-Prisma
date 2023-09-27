import * as Memcached from 'memcached';

export class MemcachedService {
  private memcached: Memcached;

  constructor() {
    this.memcached = new Memcached('localhost:11211'); // Replace with your Memcached server configuration
  }

  get<T>(key: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      this.memcached.get(key, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data as T);
        }
      });
    });
  }

  set<T>(key: string, value: T, expiration: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.memcached.set(key, value, expiration, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}