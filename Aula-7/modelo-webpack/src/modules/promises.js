function Promise (){
    return new Promise(function(resolve, reject){
       setTimeout(function(){   // setTimeout(function(){}, 0)
        console.log('promise');
        resolve('Promise resolved');
       },2000);
    });
}

export default async function (){
    await Promise();
    console.log('async');
}
