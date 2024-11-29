import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

// Function to validate requests using express-validator
export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req); // Run the validation
            if (!result.isEmpty()) {
                break;
            }
        }

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next(); // No errors, proceed
        }

        return res.status(422).json({ errors: errors.array() }); // Send errors as response
    };
};

export const loginValidator = [
    
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

// Signup-specific validators
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
   ...loginValidator,
];
