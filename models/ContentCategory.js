var keystone = require('keystone');

/**
 * ContentCategory Model
 * ==================
 */

var ContentCategory = new keystone.List('ContentCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ContentCategory.add({
	name: { type: String, required: true },
});

ContentCategory.relationship({ ref: 'Content', path: 'categories' });

ContentCategory.register();
