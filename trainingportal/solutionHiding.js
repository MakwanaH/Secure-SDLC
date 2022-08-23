const path = require('path');
const util = require(path.join(__dirname, 'util'));
const fs = require('fs');

const hidden_solution_challenge_path = "hidden_solution_challenges.json"
let dataDir = util.getDataDir();
const hidden_solution_file_path = path.join(dataDir, hidden_solution_challenge_path);
let hidden_solution_challenges = null;

try{
    if(!util.isNullOrUndefined(hidden_solution_challenge_path))
    {
        if(!fs.existsSync(hidden_solution_file_path)){
            fs.writeFileSync(hidden_solution_file_path, "{}", 'utf8');
        }
        hidden_solution_challenges = require(hidden_solution_file_path);
    }
}
catch(ex){
    util.log(ex);
}

let is_challenge_hidden = function(challengeId) {
    if (util.isNullOrUndefined(hidden_solution_challenges)) {
        util.log("Hidden solutions file not found.")
        return false;
    }
    return hidden_solution_challenges[challengeId] === true;
}

let configure_challenge = function(challengeId, hide) {
    hidden_solution_challenges[challengeId] = hide
    let json = JSON.stringify(hidden_solution_challenges, null, "\t");
    fs.writeFileSync(hidden_solution_file_path, json, 'utf8');
}

module.exports = {
    is_challenge_hidden,
    configure_challenge,
}