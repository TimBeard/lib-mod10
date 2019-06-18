/**
 *  Luhn
 *
 *  An implementation of the Luhn Formula,
 *  a simple checksum verification to validate various numbers
 *
 *  @author Tim Beard
 *  @since  2018-09-18
 */

export default (() => {

    // This will match any not digit character
    const nonDgtRex = new RegExp('\\D')

    // Digit by digit calculation logic of the checksum
    const dgtAdd = (sum, cur, idx) => {

        // Do not execute any computation if digit equals 0
        if (!cur) {

            return sum
        }

        // Multiply digits on even indice by 2 then reduce result to a single digit (using mod 9)
        if (idx % 2 === 0) {

            cur *= 2
            cur = cur % 9 || 9
        }

        // Add value to sum
        return sum + cur
    }

    // Checksum calculation logic
    const computeSum = (input) => input.split('')
        .reverse()
        .map(parseFloat)
        .reduce(dgtAdd, 0)

    /**
     *  Luhn.check
     *
     *  Checks an input against Luhn formula (mod10)
     *
     *  @param  Mixed   input   A number or a string of numbers to check against Luhn formula
     *
     *  @output Boolean true if input is valid according to Luhn formula
     */

    const check = (input) => {

        // Force input as string
        input = input.toString(10)

        // Input should only contain digits
        if (nonDgtRex.test(input)) {

            return false
        }

        // Compute checksum
        const sum = input.substring(0, input.length - 1)
        const chk = input.substring(input.length - 1)

        const res = computeSum(sum) + parseFloat(chk)

        // Checksum added to sum should be divisible by 10
        return (res % 10 === 0)
    }

    /**
     *  Luhn.compute
     *
     *  Computes checksum of an input
     *
     *  @param  Mixed   input   A number for which to compute the checksum
     *
     *  @output Number  The valid checksum for the input
     */

    const compute = (input) => {

        // Force input as string
        input = input.toString(10)

        // Input should only contain digits
        if (nonDgtRex.test(input)) {

            return false
        }

        // Compute checksum
        const sum = computeSum(input)

        // Return the checksum
        return (sum * 9) % 10
    }

    // Expose public methods
    return { check, compute }
})()
