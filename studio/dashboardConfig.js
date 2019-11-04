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
                  buildHookId: '5dc07e2a74060db43dcf4a10',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wsgak9bs',
                  apiId: 'd6631794-d969-4111-ae2f-eb470b3fcf05'
                },
                {
                  buildHookId: '5dc07e2a9a9c79a709756b09',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-632t3yir',
                  apiId: 'eb48ec80-974d-4cdb-a77c-b5f8b23c57a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mckennedy/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-632t3yir.netlify.com', category: 'apps'}
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
