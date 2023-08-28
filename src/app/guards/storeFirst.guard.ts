import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AppComponent } from "../app.component";

@Injectable()
export class StoreFirstGuard
{
    private firstNavigation = true;

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {        
        if(this.firstNavigation){
            this.firstNavigation = false;
            console.log(this.firstNavigation);
            if(route.component !== AppComponent){
                this.router.navigateByUrl('/movieStore');
                return false;
            }
        }
        return true;
    }

}