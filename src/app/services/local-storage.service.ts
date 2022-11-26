import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

    constructor(private localStorage: Storage) {}

    set<T>(key: string, value: T) {
        const json = JSON.stringify(value);
        this.localStorage.setItem(key, json);
    }

    get<T>(key: string) {
        const json = this.localStorage.getItem(key);
        if (json) {
            return JSON.parse(json) as T;
        }
        return undefined;
    }

    remove(key: string): void {
        this.localStorage.removeItem(key);
    }

    clear(): void {
        this.localStorage.clear();
    }
}