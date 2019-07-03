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

    let calculation = taxableIncome.map((obj, index) => {
        console.log("New figure before deducting: ", newFigure)
        let range = obj.max - obj.min;

        if (newFigure > range) {
            let amount = range * obj.rate;
            totalTax = amount + totalTax;
            newFigure = newFigure - range;
            console.log("Range: ", range);
            console.log("Amount of tax for the bracket: ", amount);
            console.log("Current total tax: ", totalTax)
            console.log("New figure: ", newFigure)

            console.log(`${obj.type}: ${totalTax}`)
            console.log("/////////////////////////////////")

        // if the left over figure is lesser than the range
        } else {
            // check if figure is more than 0, make sure its not negative
            if (newFigure > 0) {
                console.log(obj.rate);
                // amount of tax for the bracket
                let amount = newFigure * obj.rate;
                totalTax = amount + totalTax;
                // still need to update new figure
                newFigure = newFigure - newFigure;


            } else {
                console.log("end")
            }

            console.log("/////////////////////////////////")
            // let amount = newFigure * obj.rate;
            // totalTax = amount + totalTax;

            // console.log("Range: ", range);
            // console.log("Amount: ", amount);
            // console.log("Total tax: ", totalTax)
            // console.log("New figure: ", newFigure)

            // console.log(`${obj.type}: ${totalTax}`)
            // console.log("/////////////////////////////////")
        }

    })

    console.log("Total tax: ", totalTax);
    console.log("Yearly income: ", yearlyIncome)
}