  export default function ($stateProvider) {
      'ngInject';
      $stateProvider
          .state('Auth', {
              url: '/auth',
              component: 'appAuth',
              resolve: {
                  checkGuest: function (authService, $state) {
                      return new Promise((res, rej) => {
                              if (authService.user) {
                                  rej()
                              } else {
                                  res()
                              }
                          })
                          .catch(err => $state.go('Profile'))
                  }
              }
          })
          .state('Profile', {
              url: '/profile',
              component: 'appProfile',
              resolve: {
                  checkAuth: function (authService, $state) {
                      return authService.loadUser()
                          .catch(err => $state.go('Auth'))
                  }
              }
          })
  }