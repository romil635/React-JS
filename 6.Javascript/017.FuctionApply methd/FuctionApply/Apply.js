/*----apply() method-----*
{
    const newobj ={
        firstname :'raj',
        lastname:'lakhani'
    }
function grow (wish , massage){
     return '${this.firstname} , ${wish}.${massage}'';
    }
   const result = grow.apply(newobj ,["Good Evanig , How Are You"]);
    console.log(result) ; 
}