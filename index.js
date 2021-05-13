// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x)
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((currentTotal, x)=>{
        return x + currentTotal}, startingPoint)
}

function reduceToAllTrue(sourceArray) {
        if (sourceArray.includes(false)) {
            return false
        } else {
            return true
        }
    }

    function reduceToAnyTrue(sourceArray) {
        if (sourceArray.includes(true)) {
            return true
        } else {
            return false
        }
    }