

function printBits(n){
    // print an integer in binary, LSB to HSB
    s = ""
    for (var i=0; i<32; i++){
        s += n & 1;
        n >>= 1;
    }
    // index letters might nog be up to date
    console.log("ussgsvddtRRrrrrrrrRRRppppRRRpppp\n"+s);
}
