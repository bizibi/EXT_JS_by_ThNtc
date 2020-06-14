/*innerHTML и outerHTML не использовать - это слишком просто

1. Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
Реализовать 3 функции, выполняющие это разными способами*/
function domDisplay1(node, state = 0) {
  console.log(`${".".repeat(state)}<${node.nodeName}> ${node.nodeValue}`);

  for (let i = node.firstChild; i; i = i.nextSibling) {
    domDisplay1(i, state + 1);
  }
}
console.log(
  "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ВАРИАНТ 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>."
);
domDisplay1(document);

//======================================================================================================//

function domDisplay2(node, state = 0) {
  console.log(`${".".repeat(state)}<${node.nodeName}> ${node.nodeValue}`);

  if (node.firstChild) {
    domDisplay2(node.firstChild, state + 1);
  }
  if (node.nextSibling) {
    domDisplay2(node.nextSibling, state);
  }
}
console.log(
  "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ВАРИАНТ 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>."
);
domDisplay2(document.documentElement);

//=====================================================================================================//

function domDisplay3(node, state = "") {
  let nodeArr = Array.from(node.childNodes);

  nodeArr.forEach((el) => {
    console.log(state + "<" + el.nodeName + ">");

    if (node.childNodes.length) {
      rewState = state + ".";
      domDisplay3(el, rewState);
    }
  });
}

console.log(
  "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ВАРИАНТ 3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>."
);
domDisplay3(document);
