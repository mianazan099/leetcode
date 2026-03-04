/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        const nMap = new Map();
        strs.forEach((e)=>{
            let word = e.split('').sort().join('');
            if (nMap.has(word)) nMap.set(word, [nMap.get(word)[0]+1, [...nMap.get(word)[1], e]]); else nMap.set(word, [1, [e]])
        })
        const nArr = []
        nMap.forEach((e)=>nArr.push(e[1]))
        return nArr
};