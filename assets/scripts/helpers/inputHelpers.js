export function evaluatePasswordStrength(passwordString) {
    let strength = 0;
    if(passwordString){
        // Criteria for password strength
        const hasLowercase = /[a-z]/.test(passwordString);
        const hasUppercase = /[A-Z]/.test(passwordString);
        const hasNumbers = /\d/.test(passwordString);
        const hasSpecialChars = /\W/.test(passwordString);
        const isLongEnough = passwordString.length >= 8;

        // Increase strength for each met criteria
        if (hasLowercase) strength++;
        if (hasUppercase) strength++;
        if (hasNumbers) strength++;
        if (hasSpecialChars) strength++;
        if (isLongEnough) strength++;

        // Classify strength
        if (strength <= 2) {
            return 1;
        } else if (strength <= 4) {
            return 2;
        } else {
            return 3;
        }
    }
    return 0;
}