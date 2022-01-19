import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from './SortingAlgorithms/sortingAlgo';
 
let sortingSpeed = 30;
let numberOfArrayBars = 55;
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            array: [],
        };

    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0;i<numberOfArrayBars;i++){
            array.push(randomIntFromInterval(5,680));
        }
        this.setState({array});
    }
    
    

    bubbleSort(){
        //const jsSortedArray = this.state.array.slice().sort((a,b)=>a-b);

        const animation = sortingAlgorithms.bubbleSort(this.state.array);
        const arrayBars = document.getElementsByClassName("arrayBar");
        for(let i=0;i<animation.length;i++){
            const [firstBar,secondBar] = animation[i];
            if(i%3===0){
                    setTimeout(() => 
                {
                    arrayBars[firstBar].style.backgroundColor = "red";
                }, i*sortingSpeed
                ); 
                setTimeout(() => 
                {
                    arrayBars[secondBar].style.backgroundColor = "red";
                }, i*sortingSpeed
                );
                 
            }else if(i%3===1){
                    setTimeout(() => 
                {
                    arrayBars[firstBar].style.backgroundColor = "white";
                }, i*sortingSpeed
                ); 
                setTimeout(() => 
                {
                    arrayBars[secondBar].style.backgroundColor = "white";
                }, i*sortingSpeed
                ); 
                
            }
            else {
                setTimeout(() =>{
                    const [index1,index2]  = animation[i-1];
                    const newHeight1 = firstBar;
                    arrayBars[index1].style.height = `${newHeight1}px`;
                    const newHeight2 = secondBar;
                    arrayBars[index2].style.height = `${newHeight2}px`
                    
                },i*sortingSpeed);
                
            }
            

        }

        // for(let i=0;i<100;i++){
        //     const array = [];
        //     for(let j=0;j<310;j++){
        //         array.push(randomIntFromInterval(5,700));
                
        //     }
        //     this.setState({array});
        //     const jsSortedArray = this.state.array.slice().sort((a,b)=>a-b);
        //     const sortedArray = sortingAlgorithmBubbleSort.bubbleSort(this.state.array);
        //     console.log(areArraysSorted(sortedArray,jsSortedArray));
        //}
        
    }
    
    mergeSort(){
        const animation = sortingAlgorithms.mergeSort(this.state.array);
        const arrayBars = document.getElementsByClassName("arrayBar");
        for(let i=0;i<animation.length;i++){
            const [firstBar, secondBar] = animation[i];
            if(i%3===0){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor = "red";
                },i*sortingSpeed);
                setTimeout(()=>{
                    arrayBars[secondBar].style.backgroundColor = "red";
                },i*sortingSpeed);
            }

            else if(i%3===1){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor = "white";
                },i*sortingSpeed);
                setTimeout(()=>{
                    arrayBars[secondBar].style.backgroundColor = "white";
                },i*sortingSpeed);
            }
            else {
                setTimeout(()=>{
                    arrayBars[firstBar].style.height = `${secondBar}px`;
                },i*sortingSpeed);
            }
        }

    }

    quickSort(){
        const animation = sortingAlgorithms.quickSort(this.state.array);
        const arrayBars = document.getElementsByClassName("arrayBar");
        for(let i=0;i<animation.length;i++){
            const [firstBar,secondBar] = animation[i];
            if(i%4===0){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor="red";
                    arrayBars[secondBar].style.backgroundColor="red";
                },i*sortingSpeed)
            }
            else if(i%4===1){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor="white";
                    arrayBars[secondBar].style.backgroundColor="white";
                },i*sortingSpeed)
            }
            else if(i%4===3){
                const [index1,index2] = animation[i-1];
                setTimeout(()=>{
                    arrayBars[index1].style.height=`${firstBar}px`;
                    arrayBars[index2].style.height=`${secondBar}px`;
                },i*sortingSpeed)
            }
        }

    }

    heapSort(){
        const animation = sortingAlgorithms.heapSort(this.state.array);
        const arrayBars = document.getElementsByClassName("arrayBar");
        for(let i=0;i<animation.length;i++){
            const [firstBar, secondBar] = animation[i];
            if(i%3===0){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor = "red";
                },i*sortingSpeed);
                setTimeout(()=>{
                    arrayBars[secondBar].style.backgroundColor = "red";
                },i*sortingSpeed);

            }
            else if(i%3===1){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor = "white";

                },i*sortingSpeed);
                setTimeout(()=>{
                    arrayBars[secondBar].style.backgroundColor = "white";
                },i*sortingSpeed);
            }
            else if(i%3===2){
                
                setTimeout(()=>{
                    const [index1,index2] = animation[i-1];
                    arrayBars[index2].style.height = `${firstBar}px`;
                    arrayBars[index1].style.height = `${secondBar}px`;

                },i*sortingSpeed);
            }

        }
    }

    insertionSort(){
        const animation = sortingAlgorithms.insertionSort(this.state.array);
        const arrayBars = document.getElementsByClassName("arrayBar");
        for(let i=0;i<animation.length;i++){
            const [firstBar,secondBar] = animation[i];

            if(i%3===0){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor = "red";
                },i*sortingSpeed);
                    
                setTimeout(()=>{
                    arrayBars[secondBar].style.backgroundColor = "red";
                },i*sortingSpeed);

            }

            else if(i%3===1){
                setTimeout(()=>{
                    arrayBars[firstBar].style.backgroundColor = "white";
                },i*sortingSpeed);
                    
                setTimeout(()=>{
                    arrayBars[secondBar].style.backgroundColor = "white";
                },i*sortingSpeed);

            }

            else {
                setTimeout(()=>{
                    const newHeight1 = secondBar;
                    const [index1,index2] = animation[i-1];
                    arrayBars[index1].style.height = `${newHeight1}px`;
                    // const newHeight2 = firstBar;
                    // arrayBars[index2].style.height = `${newHeight2}px`;
                },i*sortingSpeed)
                
                
            }
        }
        

    }
    changeSpeed(){
        var slider = document.getElementById("myRange");
        sortingSpeed = 51 - slider.value;
    }

    changeSize(){
        var sizeChanger = document.getElementById("mySize");
        numberOfArrayBars = sizeChanger.value;
    }
    testAlgo(){
        const array =[];
        // for(let j=0;j<310;j++){
        //             array.push(randomIntFromInterval(5,700));
        //     }
        //     this.setState({array});
        //      const jsSortedArray = array.slice().sort((a,b)=>a-b);
        //      const sortedArray = sortingAlgorithms.heapSort(array);
        //      console.log(sortedArray);
        //      console.log(array);
        //      console.log(areArraysSorted(sortedArray,jsSortedArray));
             
        //<button className="btnClass" onClick={()=>{this.testAlgo()}}>Test Sorting Algorithm</button>
            
        for(let i=0;i<100;i++){
            const array = [];
            for(let j=0;j<310;j++){
                array.push(randomIntFromInterval(5,700));
                
            }
            this.setState({array});
            const jsSortedArray = this.state.array.slice().sort((a,b)=>a-b);
            const sortedArray = sortingAlgorithms.heapSort(this.state.array);
            console.log(areArraysSorted(sortedArray,jsSortedArray));
        }
    }
    render(){
        const {array} = this.state;
        
            return (
            <div className="wholePage">
                <style>{'body { background-color: black; }'}</style>
            
                <div className="arrayContainer">

            
                    {array.map((value,idx)=>(
                        <div 
                        className="arrayBar" 
                        key={idx}
                        style = {{height: `${value}px`}}
                        >
                            
                        </div>
                    ))

                    }
                    <br></br>
                    <p className="speedStyle">Change sorting Speed</p>
                    <input type="range" min="1" max="50" onChange={()=>{this.changeSpeed()}} defaultValue="30" class="slider" id="myRange" step ="1"/>
                    <button className="btnClass" onClick={() => {this.resetArray()}}>Generate New Array</button>
                    <button className="btnClass" onClick={()=>{this.mergeSort()}} >Merge Sort</button>
                    <button className="btnClass" onClick={()=>{this.bubbleSort()}} >Bubble Sort</button>
                    <button className="btnClass" onClick={()=>{this.heapSort()}}>Heap Sort</button>
                    <button className="btnClass" onClick={()=>{this.insertionSort()}}>Insertion Sort</button>
                    <button className="btnClass" onClick={()=>{this.quickSort()}}>Quick Sort</button>
                    
                    
                </div>
                
                    
            </div>
        )
    }

    
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function areArraysSorted(Array1,Array2){
    if(Array1.length !== Array2.length)return false;
    for(let i=0;i<Array1.length;i++){
        if(Array1[i]!== Array2[i]){
            console.log(Array1[i], Array2[i],i)
            return false;
        }
    }
    return true;
}