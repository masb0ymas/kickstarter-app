/**
 *
 * @param value
 * @returns
 */
export function hiddenString(
  value: string,
  start_hide: number,
  position: number
) {
  const value_length = value.length;
  const hide_length = value_length - start_hide;

  const digit_position = position;

  const start_value = value.slice(0, hide_length);
  const end_value = value.slice(hide_length + digit_position);

  const repeat = "*".repeat(digit_position - 5);
  const result = `${start_value}${repeat}${end_value}`;

  return result;
}

/**
 *
 * @param address
 * @param start_hide
 * @param position
 * @returns
 */
export function hiddenAddress(address: string, start_hide?: number, position?: number) {
  const new_start_hide = start_hide || 25
  const new_position = position || 15

  const result = hiddenString(address, new_start_hide, new_position);

  return result;
}
