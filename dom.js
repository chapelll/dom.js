window.dom = {}

// 创建新标签
dom.create = function (string) {
    let container = document.createElement("template")//template标签里面可以容纳任何标签
    container.innerHTML = string.trim()//trim()去掉空格
    return container.content.firstChild
}

// 在某个节点后新添加一个节点
dom.after = function (node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling)
}

// 在node的前面插入node2
dom.before = function (node, node2) {
    node.parentNode.insertBefore(node2, node)
}

// 在父亲里面插入一个儿子
dom.append = function (parent, node) {
    parent.appendChild(node)
}

//新增爸爸
dom.wrap = function (node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
}

//删除某个节点
dom.remove = function (node) {
    node.parentNode.removeChild(node)
    return node      //return 的含义是可以设置一个变量等于这个操作以此来获得这个node                               
}

//清空某个节点里面的内容
dom.empty = function (node) {
    let childNodes = node.childNodes
    let array = []
    let x = node.firstChild
    while (x) {
        array.push(x)
        dom.remove(x)
        x = node.firstChild
    }
    return array
}

//修改node的name属性为value(重载)
dom.attr = function (node, name, value) {
    if (arguments.length === 3) {
        node.setAttribute(name, value)
    } else if (arguments.length === 3) {
        return node.getAttribute(name)
    }
}

//设置新的文本(适配)
dom.text = function (node, string) {
    if (arguments.length === 2) {
        if ("innerText" in node) {
            node.innerText = string
        } else {
            node.textContent = string
        }
    } else if (arguments.length === 1) {
        if ("innerText" in node) {
            return node.innerText
        } else {
            return node.textContent
        }
    }

}

//设置新的HTML内容(重载)
dom.html = function (node, string) {
    if (arguments.length === 2) {
        node.innerHTML = string
    } else if (arguments.length === 1) {
        return node.innerHTML
    }
}

//修改节点的style样式
dom.style = function (node, name, value) {
    if (arguments.length === 3) {
        node.style[name] = value
    } else if (arguments.length === 2) {
        if (typeof name === "string") {
            return node.style[name]
        } else if (name instanceof Object) {
            for (let key in name) {
                node.style[key] = name[key]
            }
        }
    }
}

//给dom添加class
dom.class = {
    add(node, className) {
        node.classList.add(className)
    },
    remove(node, className) {
        node.classList.remove(className)
    },
    has(node, className) {
        return node.classList.contains(className)
    }
}

//添加事件
dom.on = function (node, eventName, fn) {
    node.addEventListener(eventName, fn)
}

//删除事件
dom.off = function (node, eventName, fn) {
    node.removeaddEventListener(eventName, fn)
}

//找到元素
dom.find = function (selector, scope) {
    return (scope || document).querySelectorAll(selector)
}

//获取元素的父亲
dom.parent = function (node) {
    return node.parentNode
}

//获取元素的孩子
dom.children = function (node) {
    return node.children
}

//获取元素的兄弟
dom.siblings = function (node) {
    return Array.from(node.parentNode.children).filter(n => n !== node)
}

//获取元素的弟弟
dom.next = function (node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
        x = x.nextSibling
    }
    return x
}

//获取元素的哥哥
dom.previous = function (node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
        x = x.previousSibling
    }
    return x
}

//遍历所有节点
dom.each = function (nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
        fn.call(null, nodeList[i])
    }
}

//获取排行
dom.index = function (node) {
    let list = dom.children(node.parentNode)
    let i
    for (i = 0; i < list.length; i++) {
        if (list[i] === node) {
            break
        }
    }
    return i
}
