document.getElementById("caseRaise").addEventListener("click", function () {
   
    changeProduct(true);
   
    // const caseCount = document.getElementById("caseCount");
    // const caseCountConverted = parseInt(caseCount.value);
    // const caseNewCount = caseCountConverted + 1;
    // caseCount.value = caseNewCount;
    // const caseTotal = caseNewCount * 30;
    // document.getElementById("caseTotals").innerText = caseTotal; 
})

document.getElementById("caseDecrease").addEventListener("click", function () {
    changeProduct(false);
})

function changeProduct(isIncrees) {
    const caseCount = document.getElementById("caseCount");
    const caseCountConverted = parseInt(caseCount.value);
    // const caseNewCount = caseCountConverted - 1;
    let caseNewCount = caseCountConverted;
    if (isIncrees == true){
        caseNewCount  = caseCountConverted + 1;
    }if (isIncrees == false && caseCountConverted > 0){
        caseNewCount  = caseCountConverted - 1;
    } 
    caseCount.value = caseNewCount;
    const caseTotal = caseNewCount * 30;
    document.getElementById("caseTotals").innerText = caseTotal;
}





