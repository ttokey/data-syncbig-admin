import React from 'react'

const DiffAndTransfer = React.lazy(() => import('./views/DiffAndTransfer2'))
const ApiInfo = React.lazy(() => import('./views/ApiInfo'))
const EnvInfo = React.lazy(() => import('./views/EnvInfo'))
const Rollback = React.lazy(() => import('./views/Rollback'))


const routes = [
    {path: '/', exact: true, name: 'Home'},
    {path: '/apiInfo', name: 'ApiInfo', component: ApiInfo},
    {path: '/envInfo', name: 'EnvInfo', component: EnvInfo},
    {path: '/transfer/diff', name: 'DiffAndTransfer', component: DiffAndTransfer},
    {path: '/transfer/rollback', name: 'Rollback', component: Rollback},
]

export default routes
