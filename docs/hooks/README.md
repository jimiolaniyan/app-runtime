# Hooks

The DHIS2 Application Runtime supports [React Hooks](https://reactjs.org/docs/hooks-intro.html) (introduced in React 16.8).  The following hooks are supported:

* [**useConfig**](hooks/useConfig) - Access the raw application configuration object
* [**useDataQuery**](hooks/useDataQuery) - Fetch data from the DHIS2 Core server API without worrying about HTTP requests!

While these Hooks are incredibly powerful and usually prefferable, some [Components](components/) are also provided which conveniently wrap their corresponding Hooks.