var tape = require('tape');
var rule = require('../index.js');

tape('Detects root login correctly', function(t) {
	var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
	rule.fn(rootLoginEvent, function(err, message) {
		t.equal(message.subject, 'Root user logged in to the console.', 'Detected root user login');
		//t.ok(message.subject,'Detected root user login')
		t.end();
	});
});

tape('Detects other user login correctly', function(t) {
	var notrootLoginEvent = require('./fixtures/notRootLoginEvent.json');
	rule.fn(notrootLoginEvent, function(err, message) {
		t.equal(message, 'no enviar mensaje', 'no enviar mensaje ---');
		//t.ok(message, 'no enviar mensaje')
		t.end();
	});
});

tape('Detects root from ip login correctly', function(t) {
	var iprootLoginEvent = require('./fixtures/ipRootLoginEvent.json');
	rule.fn(iprootLoginEvent, function(err, message) {
		t.equal(message, 'no enviar mensaje', 'no enviar mensaje...');
		//t.ok(message,'no enviar mensaje')
		t.end();
	});
});

