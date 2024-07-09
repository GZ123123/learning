
## Interface
    
    import { Routes } from '@angular/router';
    
    export const routes: Routes = [];
  
  ### Definition
  - Routes
      - path: string - route path
      - pathMatch: 'prefix' | 'full' - full => exact match - prefix => includes in prefix
      - matcher: (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult | null; - custom function for match path
      - component: Component - Render Component 
      - loadComponent: () => Component - Lazy Load Render Component
      - redirectTo: string - Redirect Path
      - outlet: string - define name of `RouterOutlet` object where component can be placed when patch match
      ------
      - canActivate: Array<CanActivateFn | DeprecatedGuard>
      - canMatch: Array<CanMatchFn | DeprecatedGuard>
      - canActivateChild: Array<CanActivateChildFn | DeprecatedGuard>
      - canDeactivate: Array<CanDeactivateFn<any> | DeprecatedGuard>
      - canLoad: Array<CanLoadFn | DeprecatedGuard>
      ------
      - data: Object
      - providers: Array<Provider | EnvironmentProviders>
      - children: Routes - Sub Routes
      - loadChildren: () => Module - Lazyload Module

  - UrlSegment
      - path: string - The path part of a URL segment
      - parameters: { [name: string]: string } - The matrix parameters associated with a segment
      - parameterMap(): ParamMap

  - UrlSegmentGroup
      - segments: UrlSegment[] - The URL segments of this group. See `UrlSegment` for more information
      - children: { [key: string]: UrlSegmentGroup } - The list of children of this group
      - parent: UrlSegmentGroup | null - The parent node in the url tree

  - ParamMap
      - has: (name: string): boolean - Reports whether the map contains a given parameter.
      - get: (name: string): string | null - Retrieves a single value for a parameter.
      - getAll: (name: string): string[] - Retrieves multiple values for a parameter.
## Use
- App Config 

      export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes)]
      };

- Module Config
  - Root 

        @NgModule({
          imports: [ RouterModule.forRoot(routes) ],
          exports: [ RouterModule ]
        })

  - Children (Sub Routes)

        @NgModule({
          imports: [RouterModule.forChild(routes)],
          exports: [RouterModule]
        })


