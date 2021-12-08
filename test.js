import { promises as fs } from 'fs';
import https from 'https'
import axios from 'axios';

const config = JSON.parse(await fs.readFile("config.json", 'utf8'));

(async () => {

	const httpsAgent = new https.Agent({
  		rejectUnauthorized: false
  	});

	let hatalar = [];
	for (let x in config) {
		try { 
			const res = await axios.get(config[x], { httpsAgent } );
			console.log(config[x], res.status ); 
		} catch(err) {
			console.error(config[x], err.response.status);
		}
	}
	console.log(hatalar);

})();
