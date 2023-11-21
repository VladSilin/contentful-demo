export default async function handler(
  request: any,
  response: any,
): Promise<any> {
  return response.status(200).json("Hi");
}
