function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalAmt = 0;
    for (let i = 0; i < cid.length; i++) {
        totalAmt += cid[i][1];

    }
    
    let result = {
        status: null,
        change: []
    }

    if (totalAmt === change) {
        result.status = 'CLOSED';

        result.change = cid;
        console.log(result);
        return result;
    }
    if (totalAmt < change) {
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
        console.log(result);
        return result;

    }
    // Elimanted Two Cases
    //Rest one is Status OPEN

    // status OPEN code
    cid = cid.reverse();
    let resultArr = denomination.reduce((accu, nextVal, index) => {
        let currentVal = 0;
        while (change >= nextVal.val && cid[index][1] >= nextVal.val) {
            currentVal += nextVal.val;
            change -= nextVal.val;

            cid[index][1] -= nextVal.val;
            //for removing precison
            change = Math.round(change * 100) / 100;
        }
        accu.push([nextVal.name, currentVal]);
        // console.log(accu);
        return accu;

    }, []);
    // console.log(resultArr);
    // console.log(removeZero(resultArr));

    resultArr = removeZero(resultArr);

    if (resultArr.length > 0 && change === 0) {
        result.status = 'OPEN';
        result.change = resultArr;
        console.log(result);
        return result;
    } else {
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
        console.log(result);
        return result;
    }

    // Here is your change, ma'am.

}

function removeZero(arr) {
    return arr.filter((elem) => {
        return elem[1];
    });
}

var denomination = [{
        name: 'ONE HUNDRED',
        val: 100.00
    },
    {
        name: 'TWENTY',
        val: 20.00
    },
    {
        name: 'TEN',
        val: 10.00
    },
    {
        name: 'FIVE',
        val: 5.00
    },
    {
        name: 'ONE',
        val: 1.00
    },
    {
        name: 'QUARTER',
        val: 0.25
    },
    {
        name: 'DIME',
        val: 0.10
    },
    {
        name: 'NICKEL',
        val: 0.05
    },
    {
        name: 'PENNY',
        val: 0.01
    }
];


checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// {status: "OPEN", change: [["QUARTER", 0.5]]