export default {
	swaggerDefinition : {
		openapi : '3.0.0',
		info    : {
			title       : 'Sample API (JSON)',
			version     : '1.0.0',
			description : 'This is a sample server description loaded from JSON file',
			license     : {
				name : 'Licensed Under MIT',
				url  : 'https://spdx.org/licenses/MIT.html'
			},
			contact : {
				name  : 'Youtob Telecom Inc',
				url   : 'https://utob.ir',
				email : 'info@utob.ir'
			}
		},
		servers : [
			{
				url         : 'https://localhost:3000/',
				description : 'Development server'
			},
			{
				url         : 'https://staging.utob.ir/api/v1/',
				description : 'Staging server'
			},
			{
				url         : 'https://api.utob.ir/api/v1/',
				description : 'Main server'
			}
		]
	}
};