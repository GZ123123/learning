import useSWR from "swr";

function useCreateSWR<T>(key: string | Array<any>, fetcher: any, options = {}):
  { data?: T; isLoading: boolean; isError?: any; } {
  const { data, error }: { data?: T, error?: any }
    = useSWR(key, fetcher, options)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useCreateSWR; 