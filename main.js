//generate random number
const randomIndex = array => Math.floor(Math.random() * array.length)

//array of prefixes for the message
const prefixes = ['You are', 'I am'];
const middles = ['incredibly', 'amazingly', 'formidably'];
const suffixes = ['talented', 'capable', 'skilled', 'educate', 'literate', 'passionate', 'kind', 'compassionate', 'rich'];


const messageGenerator = {
    
    _prefix: "",
    _middle: "",
    _suffix: "",
    
    set prefix(str){
        this.prefix = str;
    },

    set middle(str){
        this._middle = str;
    },

    set suffix(str){
        this._suffix = str;
    },

    output(){
        console.log(this._prefix + ' ' + this._middle + ' ' + this._suffix)
    }

}


messageGenerator._prefix = prefixes[randomIndex(prefixes)];
messageGenerator._middle = middles[randomIndex(middles)];
messageGenerator._suffix = suffixes[randomIndex(suffixes)];

messageGenerator.output();
