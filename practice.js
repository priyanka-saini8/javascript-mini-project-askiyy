var str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;
var count = 0;
var index =0;
while( index >= 0){
    index = str.indexOf('love',index);
    if(index >= 0) count++;
}
count;