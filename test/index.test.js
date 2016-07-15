var tape = require('tape');
var rule = require('../index.js');

tape('Detects root login correctly', function(t) {
	var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
	rule.fn(rootLoginEvent, function(err, message) {
		t.equal(message.subject, 'Root user logged in to the console.', 'Detected root user login');
		t.end();
	});
});

tape('Detects otheruser login correctly', function(t) {
	var notrootLoginEvent = require('./fixtures/notRootLoginEvent.json');
	rule.fn(notrootLoginEvent, function(err, message) {
		t.equal(message, 'Not user root login', 'Detected otheruser user login');
		t.end();
	});
});