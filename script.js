function calculateNetIncome() {
    var province = document.getElementById("province").value
    var gross_income = document.getElementById("gross-income").value
    var self_income = document.getElementById("self-income").value
    var rrsp_deductions = document.getElementById("rrsp").value

    if (province == "ontario") {
        let total_income = gross_income + self_income
        
    }
    else {
        document.getElementById("result").innerHTML = gross_income * 10
    }
    
    
}

function ontarioTax(totalIncome) {
    // Federal tax
    let federalTax = 0
    if(totalIncome > 235675) {
        federalTax = (totalIncome - 235675) * 0.33
    }
    if(totalIncome > 165430 && totalIncome <= 235675) {
        
    }
}