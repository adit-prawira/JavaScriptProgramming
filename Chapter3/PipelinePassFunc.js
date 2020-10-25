//'operations' is an array of functions
// iterate functions
//double(original) ->'  some text     some text  '
//-> trim('  some text     some text   ')
// -> 'some text     some text'
//-> dot('some text     some text')
//-> 'some.text.....some .text'

const pipeline = (initial, operations) => {
    let current = initial;
    for(let op of operations){
        current = op(current);
        console.log(current);
    }
    return current;
};
const trim = (text) => {return text.trim()};
const dot = (text) => {return text.replace(/ /g, '.')};
const double = (text) =>{return text + text;};
const original = '  some text   ';

const final = pipeline(original, [double, trim, dot]);

console.log(`|${original}| -> |${final}|`);
