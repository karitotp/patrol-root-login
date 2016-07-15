var lcfn = require('lambda-cfn');
var message = lcfn.message;
module.exports = {};
module.exports.fn = function(event, callback) {

	if (event.detail.userIdentity.userName === 'root' && event.detail.sourceIPAddress !== '99.101.20.31') {

		var notification = {
			subject: 'Root user logged in to the console.',
			summary: 'Patrol detected that the root AWS user logged in to the console.',
			event: event
		};

		message(notification, function(err, result) {
			callback(err, result);
		});
	} else{

		callback(null, 'no enviar mensaje');
	}
};

module.exports.config = {

	name: 'rootLogin',
	eventRule: {
		eventPattern: {
			'detail-type': [
				'AWS API Call via CloudTrail'
			],
			detail: {
				eventSource: [
					'signin.amazonaws.com'
				],
				eventName: [
					'ConsoleLogin'
				]
			}
		}
	}
};