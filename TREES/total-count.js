//PROBLEMS ON THE TREES
//print all the nodes of a BINARY TREE

class tr{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
//creating a tree from the above class
const root = new tr(3,null,null)
const node2 = new tr(9,null,null)
const node3 = new tr(20,null,null)

root.left = node2;                    //AFTER THIS TREE LOOKS LIKE
root.right = node3;                  //           3
node3.left = new tr(15,null,null)    //        9      20
node3.right = new tr(7,null,null)   //              15   7

function pn(root,count){
    if(root === null) return count;
    count ++
    count = pn(root.left,count);
    count = pn(root.right,count);
    return count;
}

console.log("PRINT TOTAL NUMBER OF NODES")
console.log(pn(root,0)) //7
