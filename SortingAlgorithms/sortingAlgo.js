export const quickSort = array => {
    const sortedArray = array.slice();
    const animation = [];
    quickSortHelper(sortedArray, 0, array.length-1,animation);
    return animation;
}

function quickSortHelper(sortedArray,start,end,animation){
    if(start<end){
        let q = partition(sortedArray,start,end,animation);
        quickSortHelper(sortedArray,start,q-1,animation);
        quickSortHelper(sortedArray,q+1,end,animation);
    }
}

function partition(sortedArray,start,end,animation){
    let val = sortedArray[end];
    let i=start-1,j=start;
    while(j<=end){
        animation.push([j,end]);
        animation.push([j,end]);
        if(sortedArray[j]>=val){
            animation.push([j,j]);
            animation.push([sortedArray[j],sortedArray[j]]);
        }
        else if(sortedArray[j]<val){
            i++;
            // let temp = sortedArray[i];
            // sortedArray[i]=sortedArray[j];
            // sortedArray[j]=temp;
            animation.push([i,j]);
            animation.push([sortedArray[j],sortedArray[i]]);
            [sortedArray[i],sortedArray[j]] = [sortedArray[j],sortedArray[i]]
        }
        j++;
    }
    // let temp2 = sortedArray[i+1];
    // sortedArray[i+1]=val;
    // sortedArray[end] = temp2;
    animation.push([i+1,end]);
    animation.push([i+1,end]);
    animation.push([i+1,end]);
    animation.push([sortedArray[end],sortedArray[i+1]]);
    [sortedArray[i+1],sortedArray[end]] = [sortedArray[end],sortedArray[i+1]];
    return ++i;
}

export const bubbleSort= array => {
    const sortedArray =array.slice();
    const animation = [];
    // for(let i=0;i<array.length;i++){
    //     for(let j=i+1;j<array.length;j++){
    //         animation.push([i,j]);
    //         animation.push([i,j]);
    //         if(sortedArray[i]>sortedArray[j]){
                
    //             animation.push([sortedArray[j],sortedArray[i]]);
    //             var temp =sortedArray[i];
    //             sortedArray[i]=sortedArray[j];
    //             sortedArray[j] =temp;
    //         }
    //         else {
    //             animation.push([sortedArray[i],sortedArray[j]]);
    //         }
            
    //     }
    // }
    // return animation;

    let isNotSorted= true;
    let k = array.length;
        for (let i=0;i<array.length && isNotSorted;i++){
            k--;
            isNotSorted = false;
            for(let j=0;j<k;j++){
                animation.push([j,j+1]);
                animation.push([j,j+1]);
                
                if(sortedArray[j]>sortedArray[j+1]){
                    let temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j+1];
                    sortedArray[j+1] = temp;
                    isNotSorted=true;
                    animation.push([sortedArray[j],sortedArray[j+1]]);
                
                }
                else {
                    animation.push([sortedArray[j],sortedArray[j+1]]);
                }
            }
            
            
        }
    return animation;
    
}


export const insertionSort = array =>{
    const sortedArray = array.slice();
    const animation = [];
    for(let i=1;i<array.length;i++){
        let key = sortedArray[i];
        let j=i-1;
        if(key<sortedArray[j]){
            while(j>=0 && key<sortedArray[j]){
                animation.push([j+1,j])
                animation.push([j+1,j])
                sortedArray[j+1]=sortedArray[j];
                animation.push([sortedArray[j+1],sortedArray[j]])
                j--;
            }
            animation.push([j+1,i])
            animation.push([j+1,i])
            animation.push([sortedArray[j+1],key])
            sortedArray[j+1] = key; 
        }
        else {
            animation.push([i,j+1])
            animation.push([i,j+1])
            animation.push([sortedArray[i],sortedArray[j+1]])
        }
        
    }
    return animation;
}


export const mergeSort = array => {
    const sortedArray = array.slice();
    const fullArray = array.slice();
    const animations = [];
    return divide(sortedArray,0,array.length-1,fullArray,animations)

}

function divide(sortedArray,start,end,fullArray,animations){
    if(start===end)return;
    var mid = Math.floor((start+end)/2);
    divide(sortedArray,start,mid,fullArray,animations);
    divide(sortedArray,mid+1,end,fullArray,animations);
    return conquer(sortedArray,start,mid,end,fullArray,animations);
} 

function conquer(sortedArray,start,mid,end,fullArray,animations){
    let a=start,b=mid+1,c=start;
    while(a<=mid && b<=end){
        animations.push([a,b]);
        animations.push([a,b]);
        
        if(fullArray[a]>fullArray[b]){
            animations.push([c,fullArray[b]]);
            sortedArray[c++]=fullArray[b++];
            
        }
        else {
            animations.push([c,fullArray[a]]);
            sortedArray[c++]=fullArray[a++];
        }
    }
    while(a<=mid){
        animations.push([a,a]);
        animations.push([a,a]);
        animations.push([c,fullArray[a]]);
        sortedArray[c++] = fullArray[a++];
        
    }
    while(b<=end){
        animations.push([b,b]);
        animations.push([b,b]);
        animations.push([c,fullArray[b]]);
        sortedArray[c++] = fullArray[b++];
        
    }
    let x=start;
    while(x<=c){
        fullArray[x] = sortedArray[x++];
    }
    return animations;
}

export const heapSort = array =>{
    const animations = [];
    const heap = [];
    heap.push(0);
    let c=0;
    for(let i=0;i<array.length;i++){

        heap.push(array[i]);
        let j=heap.length - 1;
        while(Math.floor(j/2)>0 && heap[Math.floor(j/2)]<heap[j]){
            animations.push([Math.floor(j/2)-1,j-1]);
            animations.push([Math.floor(j/2)-1,j-1]);
            animations.push([heap[Math.floor(j/2)],heap[j]]);
            [heap[Math.floor(j/2)],heap[j]] = [heap[j],heap[Math.floor(j/2)]];
            j=Math.floor(j/2);
        }
        
    }
    let j= heap.length-1;
    
    while(j>1){
        animations.push([1-1, j-1]);
        animations.push([1-1, j-1]);
        animations.push([heap[1], heap[j]]);
        let max = heap[1];
        heap[1]=heap[j];
        let ind = 1;
        
        while(2*ind + 1 < j && Math.max(heap[2*ind],heap[2*ind +1])>heap[ind]){
            let maxInd = heap[2*ind] > heap[2*ind+1]? 2*ind : 2*ind + 1;
            animations.push([maxInd-1, ind-1]);
            animations.push([maxInd-1, ind-1]);
            animations.push([heap[maxInd], heap[ind]]);
            [heap[maxInd],heap[ind]] = [heap[ind],heap[maxInd]];
            ind = maxInd;
        }
        if(2*ind+1===j && 2*ind < j && heap[2*ind]>heap[ind]){
            animations.push([2*ind-1, ind-1]);
            animations.push([2*ind-1, ind-1]);
            animations.push([heap[2*ind], heap[ind]]);
            [heap[2*ind],heap[ind]] = [heap[ind],heap[2*ind]];
        }
        heap[j--] = max;
    }
    //return heap.slice(1,heap.length);
    return animations;
}

