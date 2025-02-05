import React from 'react';
import { FormControl as MaterialFormControl, FormControlTypeMap } from '@material-ui/core';
import { OverrideProps } from '@material-ui/core/OverridableComponent';

export type FormControlProps<
  D extends React.ElementType = FormControlTypeMap['defaultComponent'],
  P = Record<string, unknown>,
> = OverrideProps<FormControlTypeMap<P, D>, D>;

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * -   FormFieldLabel
 * -   FormHelperText
 * -   Input
 * -   InputLabel
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */
export const FormControl: React.FC<FormControlProps> = (props: FormControlProps) => {
  return <MaterialFormControl {...props} />;
};

/**
 * Default export for FormControl
 */
export default FormControl;
