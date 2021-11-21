export const fetchName = async (): Promise<Array<string>> => {
  const response = await fetch("http://localhost:3001/http://names.drycodes.com/1", { method: "GET" });
  return await response.json();
};
