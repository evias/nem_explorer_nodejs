const config = {
	port: process.env.PORT || 8081,
	mongodb: process.env.MONGODB_URI || 'mongodb://localhost/explorer',
	nisHost: process.env.NIS_HOST || '127.0.0.1',
	nisPort: process.env.NIS_PORT || '7890',
	supernodeHost: 'https://supernodes.nem.io',
	supernodePayoutAccount: 'NCPAYOUTH2BGEGT3Q7K75PV27QKMVNN2IZRVZWMD',
	nisInitStartBlock: 0 //default 0
}

module.exports = config;