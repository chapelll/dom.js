// console.log("hi");



let div = dom.create("<div><span>div</span></div>")
console.log(div);

dom.before(test, div)


let parent = dom.create("<div id ='parent'></div>")
dom.wrap(div, parent)

dom.attr(div, "title", "hi")


let e = dom.empty(window.empty)
console.log(e);

dom.style(test, { border: "1px solid red", color: "blue" })
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid green")

dom.class.add(test, "red123")
console.log(dom.class.has(test, "red123"));
dom.class.remove(test, "red123")
console.log(dom.class.has(test, "red123"));

dom.on(test, "click", function () {
    console.log("点击了");
})

let test1 = dom.find("#test")[0]
console.log(test1);

let s3 = dom.find("#s3")[0]
console.log(dom.siblings(s3));

let t = dom.find("#travel")[0]
dom.each(dom.children(t), function (n) {
    dom.style(n, "color", "red")
})

console.log(dom.index(s3));
