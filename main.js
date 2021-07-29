//generate random number

const randomIndex = array => Math.floor(Math.random() * array.length)

//array of prefixes for the message
const prefixes = ['You are', 'I am'];
const middles = ['the', 'incredibly', 'amazingly', 'formidably'];
const suffixes = ['talented', 'capable', 'skilled', 'educate', 'literate', 'passionate', 'kind', 'compassionate', 'rich'];


const messageFactory = (prefixes, middles, suffixes) => {
    return {
        _prefix: prefixes,
        _middle: middles,
        _suffix: suffixes,
        
    }
}