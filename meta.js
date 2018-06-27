module.exports = {
    helpers: {
        escape: function (value) {
            return value.replace(/'/g, '&apos;');
        }
    },
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': 'Project name'
        },
        title: {
            'type': 'string',
            'required': true,
            'message': 'Project title',
            'default': 'De titel van een productie'
        },
        description: {
            'type': 'string',
            'required': true,
            'message': 'Project description',
            'default': 'Dit is een special over x.'
        },
        year: {
            'type': 'string',
            'required': false,
            'message': 'year',
            'default': (new Date()).getFullYear()
        },
        directus_table: {
            'type': 'string',
            'required': false,
            'message': 'Directus content table name',
            'default': 'producties'
        },
        directus_project_id: {
            'type': 'int',
            'required': false,
            'message': 'Directus project id',
            'default': 1
        },
        loader_background: {
            'type': 'int',
            'required': false,
            'message': 'Loader background color',
            'default': '#d3d3d3'
        },
        loader_text: {
            'type': 'int',
            'required': false,
            'message': 'Loader text color',
            'default': '#000'
        },
        author: {
            'type': 'string',
            'message': 'Author'
        },
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
