function useRemoteData(url) {
  const [data, setData] = useState();
  ("... other state (errors, loading, etc)");

  useEffect(
    () => {
      "... fetch data, set loading states, etc";
      document.title;
    },
    [url]
  );

  return { isLoading, data };
}

const { isLoading, data } = useRemoteData(`http://myapi.com?${query}`);
