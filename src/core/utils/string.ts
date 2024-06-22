/**
 *
 * @param address
 * @returns
 */
export function hiddenAddress(address: string) {
  const address_length = address.length;
  const hide_length = address_length - 25;

  const digit_position = 15;

  const start_value = address.slice(0, hide_length);
  const end_value = address.slice(hide_length + digit_position);

  const repeat = "*".repeat(digit_position - 5);
  const result = `${start_value}${repeat}${end_value}`;

  return result;
}
