export const validResponse = (input: string, response: string) => {
  const parsedResponse = response
    .split(/[|/,]/)
    .map(item => item
      .replace(/\(.*\)/, '')
      .trim()
    )

  return parsedResponse.some(item => new RegExp(`^${item}$`, 'i').test(input.trim()))
}