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

    /**
     *  Validates any non-digit character
     *
     *  @scope  private
     */

    const nonDgtRex = new RegExp('\\D')

    /**
     *  Checksum digit by digit calculation logic
     *
     *  @scope private
     */

    const dgtAdd = (sum, cur, idx) => {

        // If curent digit equals 0, skip...
        if (!cur) {

            return sum
        }

        // On even indice...
        if (idx % 2 === 0) {

            // Multiply value by 2
            cur *= 2

            // If result is greater than 9, reduce to a single digit
            cur = cur % 9 || 9
        }

        // Add value to sum
        return sum + cur
    }

    /**
     *  Checksum calculation logic
     *
     *  @scope  private
     */

    const computeSum = (input) => input.split('')
        .reverse()
        .map(parseFloat)
        .reduce(dgtAdd, 0)

    /**
     *  Checks an input against Luhn Formula
     *
     *  @scope  public
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
    };

    /**
     *  Computes check digit of an input based on Luhn Formula
     *
     *  @scope public
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

        // The check digit equals 10 -
        return (sum * 9) % 10
    };

    // Expose public methods
    return { check, compute }
})()
