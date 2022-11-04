import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

interface Topic {
  
}

export class LibraryResolver implements Resolve<Array<{}>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): {}[] | Observable<{}[]> | Promise<{}[]> {
    throw new Error("Method not implemented.");
  }
}