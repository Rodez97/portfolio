import useMediaQuery from "./useMediaQuery";

function useMediaQueries() {
  const sm = useMediaQuery("(max-width: 480px)");
  const md = useMediaQuery("(max-width: 768px)");

  return { sm, md };
}

export default useMediaQueries;
