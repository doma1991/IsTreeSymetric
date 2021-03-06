function isTreeSymetric(t) {

let sum = 0;
function inorder(node) 
{ 
    if(node !== null) 
    { 
        sum = sum + node.value;  
        inorder(node.left); 
        // console.log(node.data); 
        inorder(node.right); 
    } 
    return sum;
} 

return inorder(t);
}

const t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}

console.log(isTreeSymetric(t))