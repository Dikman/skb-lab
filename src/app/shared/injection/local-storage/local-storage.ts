import { InjectionToken } from "@angular/core";

export const LOCAL_STORAGE = new InjectionToken('native-local-storage', {
  providedIn: 'root',
  factory: () => localStorage,
});
