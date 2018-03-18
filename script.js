var tablenumber=100;
var items=["burger","pasta","cake"];
//method that prepares food
function prepareFood(tablenumber,items,callbackfun){
	console.log("Preparing food for items -" + items);
	console.log('Serving food for items -'+ callbackfun(tablenumber,items));
}
//method that serves food
function serveFood(tablenumber,items){
	return items;
}
prepareFood(tablenumber,items,serveFood);