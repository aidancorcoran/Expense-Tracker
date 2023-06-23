function calculateNetIncome() {
    var province = document.getElementById("province").value
    var gross_income = document.getElementById("gross-income").value
    var self_income = document.getElementById("self-income").value
    var rrsp_deductions = document.getElementById("rrsp").value

    if (province == "ontario") {
        let total_income = gross_income + self_income
        document.getElementById("result").innerHTML = total_income - ontarioTax(total_income)
    }
    else {
        document.getElementById("result").innerHTML = gross_income * 10
    }
    
    
}

function ontarioTax(totalIncome) {
    // Federal tax
    let federal_tax = 0
    if(totalIncome > 235675) {
        federal_tax += (totalIncome - 235675) * 0.33
    }
    if(totalIncome > 165430) {
        if(totalIncome > 235675) {
            federal_tax += (235675 - 165430) * 0.29
        }
        else {
            federal_tax += (totalIncome - 165430) * 0.29
        }
    }
    if(totalIncome > 106717) {
        if(totalIncome > 165430) {
            federal_tax += (165430 - 106717) * 0.26
        }
        else {
            federal_tax += (totalIncome - 106717) * 0.26
        }
    }
    if(totalIncome > 53359) {
        if(totalIncome > 106717) {
            federal_tax += (106717 - 53359) * 0.205
        }
        else {
            federal_tax += (totalIncome - 53359) * 0.205
        }
    }
    if(totalIncome > 0) {
        if(totalIncome > 53359) {
            federal_tax += (53359) * 0.15
        }
        else {
            federal_tax += (totalIncome) * 0.15
        }
    }

    // Provincial tax
    let provincial_tax = 0
    if(totalIncome > 220000) {
        provincial_tax += (totalIncome - 220000) * 0.1316
    }
    if(totalIncome > 150000) {
        if(totalIncome > 220000) {
            provincial_tax += (220000 - 150000) * 0.1216
        }
        else {
            provincial_tax += (totalIncome - 150000) * 0.1216
        }
    }
    if(totalIncome > 98463) {
        if(totalIncome > 150000) {
            provincial_tax += (150000 - 98463) * 0.1116
        }
        else {
            provincial_tax += (totalIncome - 98463) * 0.1116
        }
    }
    if(totalIncome > 49231) {
        if(totalIncome > 98463) {
            provincial_tax += (98463 - 49231) * 0.0915
        }
        else {
            provincial_tax += (totalIncome - 49231) * 0.0915
        }
    }
    if(totalIncome > 0) {
        if(totalIncome > 49231) {
            provincial_tax += (49231) * 0.0505
        }
        else {
            provincial_tax += (totalIncome) * 0.0505
        }
    }

    return (federal_tax + provincial_tax)
}