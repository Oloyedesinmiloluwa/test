
// 5*4*3*2*1
const factorial = (num) => {
    // base clause
    if(num === 1) return 1;

  return num * factorial(num - 1)
}

const ans = factorial(5)
// console.log(ans);

const data = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 3
        },
        right: {
            data: 5,
            right: {
                data: 9
            }
        },
    },
    right: {
        data: 10,
        right: {
            data: 12
        }
    },
    
}
const output = [];
const preOrder = (root) => {
    if(!root) return;
    output.push(root.data);

    if(root.left) {
        preOrder(root.left)
    }

    if(root.right) {
        preOrder(root.right) 
    }
    // preOrder(root.left, root.right)
    // preOrder(root.right)
}
// preOrder(data);
// console.log(output)


const recurse = (root) => {
    console.log(root?.data)
    if(!root || (!root.left && !root.right)) return 0;
    const leftVal = 1 + recurse(root.left);
    const rightVal = 1 + recurse(root.right);
    return Math.max(leftVal, rightVal)
}
function treeHeight(root) {
    // console.log(root)
	const height = recurse(root);
    // console.log(root);
    return height;
}
const newData = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 3,
        },
        right: {
            data: 3,
        }
    }
}
console.log(treeHeight(newData));