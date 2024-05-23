import { StorageService } from "./storage.service";
import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { host } from "../../../../environments/environment";

/**
 * Service to interact with Cookies
 *
 * @author J. R. Smith
 * @since 3rd May 2024
 */
@Injectable({
  providedIn: 'root',
})
export class CookiesService implements StorageService {

  constructor(private ngxCookie: CookieService) {}

  get(key: string): string | null {
    const res = this.ngxCookie.get(key);

    return !res ? null : res;
  }

  set(key: string, value: string): void {
    this.ngxCookie.set(key, value, { domain: host, path: '/' });
  }

  delete(key: string): void {
    this.ngxCookie.delete(key);
  }

}