import React from 'react';
import { InputProps, MenuProps, Select as MaterialSelect } from '@material-ui/core';
import { SelectProps as MaterialSelectProps } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface SelectProps extends BaseProps {
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth?: boolean;

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children?: React.ReactNode;

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue?: unknown;

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty?: boolean | undefined;

  /**
   * The icon that displays the arrow.
   */
  IconComponent?: React.ElementType;

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id?: string;

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input?: React.ReactElement<any, any>;

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps?: InputProps['inputProps'];

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label?: React.ReactNode;

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId?: string;

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth?: number;

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps?: Partial<MenuProps>;

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple?: boolean;

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native?: boolean;

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   * @document
   */
  onChange?: MaterialSelectProps['onChange'];

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open?: boolean;

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue?: (value: SelectProps['value']) => React.ReactNode;

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;

  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   * @document
   */
  value?: unknown;
}

/**
 * Select components are used for collecting user provided information from a list of options.
 */
export const Select: React.FC<SelectProps> = (props: SelectProps) => {
  return <MaterialSelect {...props}>{props.children}</MaterialSelect>;
};

/**
 * Default export for Select
 */
export default Select;
