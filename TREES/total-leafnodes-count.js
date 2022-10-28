//print all the leaf nodes
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


function ln(root){
    if(root === null) return;
    if(root.left === null && root.right === null){
        console.log(root.data)
    }
    ln(root.left);
    ln(root.right);
}
console.log("print all the leaf nodes")
ln(root)