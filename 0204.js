let arr = [0,2,4,3,5];

let result = makeSquares(arr);

function makeSquares()
{
    for(i = 0; i < arr.length; i++)
    {
        let squareNumber = 0;
    
        squareNumber = Math.pow(arr[i], 2);
        
        alert(squareNumber)
    }
}

