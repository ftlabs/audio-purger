const debug = require('debug')('audio-purger:controllers:purger');
const obliviate = require('../lib/delete-files-and-metadata-for-item');
const purgeCacheItem = require('../lib/purge-availability-cache-of-item');

module.exports = (req, res) => {
  obliviate(req.params.uuid)
		.then(function(){
			purgeCacheItem(req.params.uuid)
				.catch(err => {
					debug(err);
				});

			res.json({
				status : 'ok',
				message : `Audio files and associated metadata for ${req.params.uuid} have been deleted`
			});
		});
};
