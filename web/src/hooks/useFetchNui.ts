import { fetchNui } from "@/utils/fetchNui";
import { useMutation } from "@tanstack/react-query";

export const useFetchNui = <T>(action: string) => {
  return useMutation<T, Error, unknown>({
    mutationFn: (data) => fetchNui<T>(action, data),
  });
};
