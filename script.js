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

const inputHappened = function(currentInput) {
    const yearlyIncome = annualIncome(parseInt(currentInput));
    let newFigure = yearlyIncome;

    let totalTax = 0;

    // first check
    const first = taxableIncome[0].max - taxableIncome[0].min;
    if (newFigure > first) {
        let firstAmount = first * taxableIncome[0].rate
        totalTax = first + totalTax;  // add to total tax
        console.log("total tax for first: ", totalTax)

        const second = taxableIncome[1].max - taxableIncome[1].min;
        // if the second cap is bigger than the range, just take the range amount * rate
        if (newFigure > second ) {
            let secondAmount = second * taxableIncome[1].rate;
            totalTax = secondAmount + totalTax;
            newFigure = newFigure - second;

            console.log("second: ", secondAmount)

            const third = taxableIncome[2].max - taxableIncome[2].min;
            if (newFigure > third ) {
                const thirdAmount = third * rate;
                totalTax = thirdAmount + totalTax;
                newFigure = newFigure - thirdAmount;
                console.log("third: ", thirdAmount)

                // as long as there is balance, then times the final rate
                if (newFigure > 0) {
                    const finalAmount = (newFigure * taxableIncome[3].rate)
                    totalTax = finalAmount + totalTax;
                    console.log("Final Amount: ", totalTax)
                }

            // end of checking third amount
            } else {
                let thirdAmount = newFigure * taxableIncome[2].rate;
                totalTax = thirdAmount + totalTax;
                console.log("third: ", thirdAmount)
            }

        // end of checking for second amount
        // else - if figure is lesser than the range, then figure * rate
        }  else {
            let secondAmount = newFigure * taxableIncome[1].rate;
            totalTax = secondAmount + totalTax;
            console.log("second: ", secondAmount)
        }

    // end of checking for first amount
    } else {
        totalTax = (newFigure * taxableIncome[0].rate) + totalTax;
    }


    console.log("Total tax: ", totalTax);
    console.log("Yearly income: ", yearlyIncome)
}