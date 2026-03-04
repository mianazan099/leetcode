/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        const map = new Map();
        strs.forEach((e)=>{
            let word = e.split('').sort().join('');
            if (map.has(word)) {
                map.set(word, [...map.get(word), e])
            } else {
                map.set(word, [e])
            }
        })
        return [...map.values()]
};