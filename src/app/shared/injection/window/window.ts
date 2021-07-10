import { InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken('native-window', {
  providedIn: 'root',
  factory: () => window,
});
