// String Methods

// 1. length
const name = "abul";
console.log(name.length);

// 2. trim
console.log(name.trim());

// 3. trimLeft
console.log(name.trimLeft());

// 4. trimRight
console.log(name.trimRight());

// 5. indexOf
console.log(name.indexOf("a"));

// 6. lastIndexOf
console.log(name.lastIndexOf("a"));

// 7. includes
console.log(name.includes("a"));

// 8. repeat
console.log(name.repeat(3));

// 9. slice
console.log(name.slice(1));

// 10. substring
console.log(name.substring(1));

// 11. substring
console.log(name.substring(1, 3));

// 12. match
console.log(name.match(/a/g));

// 13. replace
console.log(name.replace("a", "b"));

// 14. search
console.log(name.search("a"));

// 15. split
console.log(name.split(""));

// 16. startsWith
console.log(name.startsWith("a"));

// 17. endsWith
console.log(name.endsWith("a"));

// 18. charAt
console.log(name.charAt(1));

// 19. charCodeAt
console.log(name.charCodeAt(1));

// 20. concat
console.log(name.concat("b"));

// 21. padStart
console.log(name.padStart(10));

// 22. padEnd
console.log(name.padEnd(10));

// 23. toUpperCase
console.log(name.toUpperCase());

// 24. toLowerCase
console.log(name.toLowerCase());

// 25. trimStart
console.log(name.trimStart());

// 26. trimEnd
console.log(name.trimEnd());

// 27. fromCharCode
console.log(name.fromCharCode(97));

// 28. codePointAt
console.log(name.codePointAt(1));

// 29. normalize
console.log(name.normalize());

// 30. localeCompare
console.log(name.localeCompare("abul"));

// 31. localeCompare
console.log(name.localeCompare("abul", "en"));

// 32. matchAll
console.log(name.matchAll(/a/g));

// 33. matchAll
console.log(name.matchAll(/a/g, "en"));

// Number Methods


// 1. isNaN
console.log(isNaN(NaN));

// 2. isFinite
console.log(isFinite(Infinity));

// 3. isInteger
console.log(isInteger(10));

// 4. parseInt
console.log(parseInt("10"));

// 5. parseFloat
console.log(parseFloat("10"));

