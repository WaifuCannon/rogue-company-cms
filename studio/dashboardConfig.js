export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f73c2539aa3761d001facb6',
                  title: 'Sanity Studio',
                  name: 'rogue-company-cms-studio',
                  apiId: '94672faf-b862-4f88-9988-cb34b4dbda74'
                },
                {
                  buildHookId: '5f73c2530e70291e7431bc22',
                  title: 'Blog Website',
                  name: 'rogue-company-cms',
                  apiId: 'a615883a-65dc-4cfa-a5a1-84615c33274d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WaifuCannon/rogue-company-cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rogue-company-cms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
