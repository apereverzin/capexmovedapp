var balance;
const interval = 500;

function startApp(web3) {
    var smartBondCreatorAbi = JSON.parse('[{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"smartBondContracts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bondIssuerAddress","type":"address"},{"name":"_investorAddress","type":"address"},{"name":"_bondName","type":"string"},{"name":"_bondFaceValueInWei","type":"uint256"},{"name":"_bondMaturityInSeconds","type":"uint256"},{"name":"_numberOfCouponPayments","type":"uint256"},{"name":"_couponPaymentInWei","type":"uint256"},{"name":"_totalNumberOfDebtTokens","type":"uint256"},{"name":"_debtTokenName","type":"string"},{"name":"_debtTokenSymbol","type":"string"}],"name":"createSmartBond","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getSmartBond","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contractCount","type":"uint256"},{"indexed":false,"name":"smartBond","type":"address"}],"name":"smartBondCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]');
    SmartBondCreatorContract = web3.eth.contract(smartBondCreatorAbi);
    smartBondCreatorContractInstance = SmartBondCreatorContract.at('0x022ce169a8f7acc379edea11fca489b25b53c6c9');

    var smartBondAbi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"investorAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"loanTransfer","outputs":[{"name":"amountInWei","type":"uint256"},{"name":"transferTimestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"repayLoanToInvestor","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"repaymentCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bondIssuerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"transferLoanToBondIssuer","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfCouponPaymentsRemaining","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bondName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalNumberOfDebtTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isDefaulted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalAmountInWeiToRepay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"couponPaymentInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfCouponPayments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setDefaultState","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAmountToBeRepaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bondMaturityInSeconds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"repaymentTransfers","outputs":[{"name":"amountInWei","type":"uint256"},{"name":"transferTimestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractCreationTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bondFaceValueInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalAmountInWeiRepaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_bondIssuerAddress","type":"address"},{"name":"_investorAddress","type":"address"},{"name":"_bondName","type":"string"},{"name":"_bondFaceValueInWei","type":"uint256"},{"name":"_bondMaturityInSeconds","type":"uint256"},{"name":"_numberOfCouponPayments","type":"uint256"},{"name":"_couponPaymentInWei","type":"uint256"},{"name":"_totalNumberOfDebtTokens","type":"uint256"},{"name":"_debtTokenName","type":"string"},{"name":"_debtTokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"logTokensTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"logTokensTransferApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_caller","type":"address"},{"indexed":false,"name":"_amountInWei","type":"uint256"}],"name":"logLoanPaidByInvestor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_caller","type":"address"},{"indexed":false,"name":"_amountInWei","type":"uint256"}],"name":"logLoanTransferredToBondIssuer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_caller","type":"address"},{"indexed":false,"name":"_amountInWei","type":"uint256"}],"name":"logLoanRepaidByBondIssuer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_caller","type":"address"},{"indexed":false,"name":"_amountInWei","type":"uint256"}],"name":"logRepaymentTransferredToInvestor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"}],"name":"logDebtTokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"}],"name":"logDebtTokensDestroyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_caller","type":"address"}],"name":"logDefaultStateSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]');

    listenToEvents();

    console.log(web3.eth.accounts[0]);
}

function handleError(error) {
    bootbox.alert(error.responseJSON.message + " " +
    error.responseJSON.error + " " +
    error.responseJSON.status + " " +
    error.responseJSON.path);
}

function handleErrorResponse(path, error) {
    var msg = error.statusText + " " + error.status + " " + path;
    console.log(msg);
    bootbox.alert(msg);
}

function confirmTransaction(path, transactionHash) {
    var transactionHashData = JSON.stringify({
                                              'transactionHash': transactionHash
                                             });
    $.ajax({
            url: path,
            type: 'put',
            data: transactionHashData,
            headers: {
                'Content-Type': 'application/json'
            },
            error: function(error) {
                handleErrorResponse(path, error);
            }
    });
}

function createSmartBond() {
    address = getAddress();

    var bondIssuerAddress = $("#bondIssuerAddress").val();
    var investorAddress = $("#investorAddress").val();
    var bondName = $("#bondName").val();
    var bondFaceValueInWei = $("#bondFaceValueInWei").val();
    var bondMaturityInSeconds = $("#bondMaturityInSeconds").val();
    var numberOfCouponPayments = $("#numberOfCouponPayments").val();
    var couponPaymentInWei = $("#couponPaymentInWei").val();
    var totalNumberOfDebtTokens = $("#totalNumberOfDebtTokens").val();
    var debtTokenName = $("#debtTokenName").val();
    var debtTokenSymbol = $("#debtTokenSymbol").val();

    var c;
    smartBondCreatorContractInstance.contractCount.call(
            function(error, result) {
                if(!error) {
                    c = result;
                    var msg = "Count : " + c;
                    console.log(msg);
                } else {
                    console.error(error);
                }
            }
    );

    smartBondCreatorContractInstance.createSmartBond(bondIssuerAddress,
                                     investorAddress,
                                     bondName,
                                     bondFaceValueInWei,
                                     bondMaturityInSeconds,
                                     numberOfCouponPayments,
                                     couponPaymentInWei,
                                     totalNumberOfDebtTokens,
                                     debtTokenName,
                                     debtTokenSymbol,
                                     {from: address},
        function(error, result) {
            if(error) {
                console.error(error);
            } else {
                listenToEvents();
                waitForTransactionToBeMined(result, smartBondCreated, result, c);
            }
        }
    );
}

function smartBondCreated(result, c) {
    var smartBond;
    smartBondCreatorContractInstance.getSmartBond.call(c,
            function(error, result) {
                if(!error) {
                    smartBond = result;
                    var msg = "Smart Bond : " + smartBond;
                    console.log(msg);
                } else {
                    console.error(error);
                }
            }
    );
}

function commitTransaction(path, transactionHash, func) {
    var transactionHashData = JSON.stringify({
                                              'transactionHash': transactionHash
                                             });
    $.ajax({
        url: path,
        type: 'put',
        data: transactionHashData,
        headers: {
            'Content-Type': 'application/json'
        },
        success: func,
        error: function(error) {
            handleErrorResponse(path, error);
        }
    });
}

function rollbackTransaction(path, error, func) {
    console.log(error);
    $.ajax({
        url: path,
        type: 'delete',
        error: function(error) {
            handleErrorResponse(path, error);
        }
    });
}

function getWeb3(callback) {
    var Web3 = require('web3');
    var myWeb3;
    if (typeof window.web3 === 'undefined') {
        console.error("Please use a web3 browser");
        myWeb3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    } else {
        myWeb3 = new Web3(window.web3.currentProvider);
    }
    callback(myWeb3);
}

$(document).ready(function() {
    getWeb3(startApp);
});

function getAddress() {
    var address = web3.eth.accounts[0]
    if (address === undefined) {
        console.log('address undefined')
        return ''
    }
    return address
}

function waitForTransactionToBeMined(txHash, func, param1, param2) {
    const transactionReceiptAsync = function(resolve, reject) {
        web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
            if (error) {
                reject(error);
            } else if (receipt == null) {
                setTimeout(
                    () => transactionReceiptAsync(resolve, reject),
                    interval);
            } else {
                resolve(receipt);
                if (param1 === undefined) {
                    setTimeout(
                        () => func(),
                        interval * 4
                    );
                } else if (param2 === undefined) {
                    setTimeout(
                        () => func(param1),
                        interval * 4
                    );
                } else {
                    setTimeout(
                        () => func(param1, param2),
                        interval * 4
                    );
                }
            }
        });
    };
    return new Promise(transactionReceiptAsync);
};

function showDateTime(timestamp) {
    date = new Date(timestamp);

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    return date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec;
}

function listenToEvents() {
    smartBondCreatorContractInstance.smartBondCreated().watch(
        (err, event) => {
            console.log("Smart Bond created " + event.args.contractCount + ", " + event.args.smartBond);
        }
    );
}

