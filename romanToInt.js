var romanToInt = function(s) {
var I=1;
var V=5;
var X=10;
var L=50;
var C=100;
var D=500;
var M=1000;
var n=0;   
var c=0;
let last="";
for(const item of s){
    if (item=="I"){
       n=n+I;
       
    }else if(item=="V"){
        if(last=="I"){
           n=n-2*I;
       }
     n=n+V;    
    }else if(item=="X"){
      n=n+X;
      if(last=="I"){
       n=n-2*I;    
      }    
    }else if(item=="L"){
      n=n+L;   
      if(last=="X"){
        n=n-2*X;  
      }   
    }else if(item=="C"){
     n=n+C;
     if(last=="X"){
       n=n-2*X;    
      }   
    }else if(item=="D"){
       n=n+D;
       if(last=="C"){
          n=n-2*C;    
      }    
    }else if(item=="M"){
         n=n+M;
        if(last=="C"){
          n=n-2*C;    
      }
    }
    last=item;
  }
    
    return n;
};

console.log(romanToInt("MCMXCVI"))