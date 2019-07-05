console.log("script.js working");

const taxableIncome = [
    {
        type: "first",
        rate: 0.05,
        min: 0,
        max: 50000000
    },
    {
        type: "second",
        rate: 0.15,
        min: 50000000,
        max: 250000000
    },
    {
        type: "third",
        rate: 0.25,
        min: 250000000,
        max: 500000000
    },
    {
        type: "last",
        rate: 0.30,
        min: 500000000
    }
]

// get the annual income first
const annualIncome = function(income) {
    return income * 12;
};

// calculation for each bracket according to income input
const calculation = function(taxableIncomeObj, currentAnnualIncome, totalTax) {
    taxableIncome.map(obj => {
        console.log("New figure before deducting: ", currentAnnualIncome)
        let range = obj.max - obj.min;

        if (currentAnnualIncome > range) {
            let amount = range * obj.rate;
            totalTax = amount + totalTax;
            currentAnnualIncome = currentAnnualIncome - range;
            console.log("Range: ", range);
            console.log("Amount of tax for the bracket: ", amount);
            console.log("Current total tax: ", totalTax)
            console.log("New figure: ", currentAnnualIncome)

            console.log(`${obj.type}: ${totalTax}`)
            console.log("/////////////////////////////////")

        // if the left over figure is lesser than the range
        } else {
            // check if figure is more than 0, make sure its not negative
            if (currentAnnualIncome > 0) {
                console.log(obj.rate);
                // amount of tax for the bracket
                let amount = currentAnnualIncome * obj.rate;
                totalTax = amount + totalTax;
                // still need to update new figure
                currentAnnualIncome = currentAnnualIncome - currentAnnualIncome;


            } else {
                console.log("end")
            }

            console.log("/////////////////////////////////")

        }
    }) // end of map

    return totalTax;
}  // end of function


const input = document.getElementById("input");
const viewAmount = document.getElementById("viewAmount");

// change input as user type, with commas
const changeInput = function(event) {
    let currentUserInput = Number(event.target.value);
    let updatedInput = currentUserInput.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' });

    viewAmount.textContent = updatedInput;
}

// on key down, check the input value and convert
input.addEventListener("input", changeInput)


const inputHappened = function(currentInput) {
    if (!isNaN(Number(currentInput))) {
        // cannot change
        const yearlyIncome = annualIncome(Number(currentInput))

        console.log(Number(currentInput))
        let newFigure = yearlyIncome;  // can change and play around with it
        let totalTax = 0;
        let newTotalTax = calculation(taxableIncome, newFigure, totalTax)
        let formatTotalTax = newTotalTax.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' });

        display(`Total Tax: ${formatTotalTax}`);



        console.log("Total tax: ", newTotalTax);
        console.log("Yearly income: ", yearlyIncome);


    } else {
        viewAmount.textContent = "Please submit a valid amount!"
    }

}



// cannot use this cause it has to be a number
// currentUserInput = parseInt(event.target.value);
// currentUserInput = currentUserInput.toLocaleString("en-ID")
// // console.log(currentUserInput.toLocaleString("en-ID", { style: 'currency', currency: 'IDR' }));
//console.log(currentUserInput)