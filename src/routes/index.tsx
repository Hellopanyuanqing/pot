import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig, { IFMenuBase } from './config';
import AllComponents from '../views';
const CRouter = () => {
        const createMenu = (r: IFMenuBase) => {
            const Component = r.component && AllComponents[r.component];
            return (
                <Route
                    key={r.key}
                    exact
                    path={r.key}
                    render={(props: any) => {
                        return <Component {...props}/>;
                    }}
                />
            );
        };

     
    const createRoute = (key: string) => routesConfig[key].map(createMenu);
    return (
        <Switch>
            {Object.keys(routesConfig).map((key) => createRoute(key))}
            <Route render={() => <Redirect to="/404" />} />
        </Switch>
    );
};

export default CRouter;
