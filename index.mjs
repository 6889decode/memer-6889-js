//importing the files
import Memer from "./lib/memer-api.mjs";
import { version } from "./package.json";
//function for generating a new meme
function Meme(token) {
  return new Memer(token);
}

Meme.Memer = Memer;
Meme.version = version;

//exporting this meme
export default Meme;
