import App from 'App'

const errorLoading = (err) => { console.error('Dynamic page loading failed', err) }
const loadRoute = cb => module => cb(null, module.default)

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('Index')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: '/:id/update',
      getComponent(location, cb) {
        System.import('Update')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: '/new',
      getComponent(location, cb) {
        System.import('New')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
}

export default routes
