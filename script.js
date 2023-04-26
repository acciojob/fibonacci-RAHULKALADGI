function fibonacci(num) {
// your code here
        let a = 0;
        let b = 1;
        let c;
        if(num == 1) {
            console.log(0);
        }
        else if(num == 2) {
            console.log(1);
        }
        else {
        for(let i = 3;i<=num;i++) {
            c = a+b;
            a = b;
            b = c;
        }
            console.log(c);
        }
    }


module.exports = fibonacci;
