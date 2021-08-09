// // problem 01: seerToMon 

// function seerToMon(seer) {
//     //Exception Handling
//     if (typeof seer != 'number'){
//         return 'Please provide a number!';
//     }
//     if (seer < 0){
//         return 'Please provide a positive number';
//     }
//     //calculation
//     var convert = seer / 40;
//     return convert;
    
// }
// var result = seerToMon(160);
// console.log(result);



// problem 02: totalSales

// function totalSales(shirtquantity, pantquantity, shoequantity) {
//     // variable declaration 
//     const shirt = 100;
//     const pant = 200;
//     const shoe = 500;
//     // Exeption handling
//     if (typeof shirtquantity != 'number' || shirtquantity < 0) {
//         return 'please provide a number';        
//     }
//     if (typeof pantquantity != 'number' || pantquantity < 0) {
//         return 'please provide a number';        
//     }
//     if (typeof shoequantity != 'number' || shoequantity < 0) {
//         return 'please provide a number';        
//     }
//     // main calculation            
//     var shirtprice = shirt * shirtquantity;
//     var pantprice = pant *  pantquantity;
//     var shoeprice = shoe * shoequantity;
//     var totalprice = shirtprice+pantprice+shoeprice;
//     return totalprice;
    
// }
// result = totalSales(3, 5, 1);
// console.log(result);



// problem 03: deliveryCost 
// function deliveryCost(shirt) {
//     //exception handling
//     if(shirt <= 0){
//         return 'please enter a number';
//     }
//     if (typeof shirt != 'number'){
//         return 'Please provide a number!';
//     }
    
//     // variable declaration 
//     const shirtCostUnderfirst100 = 100;
//     const shirtCostUndersecond100 = 80;
//     const shirtCostUnderthird100 = 50;
    

//     // deliverycost calculation 
//     if(shirt <= 100){
//         var totalcost = shirt * shirtCostUnderfirst100;
//         return totalcost;
//     }
//     else if (shirt <=200){
//         const first100shirt = 100 * shirtCostUnderfirst100 ;
//         const restshirt = shirt - 100;
//         const second100shirt = restshirt * shirtCostUndersecond100;
//         const totalcost = first100shirt+second100shirt;
//         return totalcost;
        
//     }
//     else{
//         const first100shirt = 100 * shirtCostUnderfirst100 ;
//         const second100shirt = 100 * shirtCostUndersecond100 ;
//         const restshirt = shirt - 200;
//         const third100shirt =restshirt * shirtCostUnderthird100;
//         const totalcost = first100shirt+ second100shirt+ third100shirt;
//         return totalcost;       
//     }
// }

// const result = deliveryCost(201);
// console.log(result);




// // problem 04: perfectFriend  

// //array declaration
// var friends=['shakib', 'hironmoy', 'shifat', 'syied', 'tamim', 'mushfique','sabbir'];
// function perfectFriend(friends) {
//     // main calculation 
//     for(var i = 0; i < friends.length; i++){
//         // exception handling
//         if(typeof(friends[i]) != 'string' ){
//             return 'please enter object';
//         }
//         // main calculation 
//         if (friends[i].length <=5 ) {
//             var bestfriend = friends[i];
//             return bestfriend;
//         }       
//     }   
// }
// var result = perfectFriend(friends);
// console.log(result);
