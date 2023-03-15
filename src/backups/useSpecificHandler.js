import { useCallback } from "react"

function useSpecificHandler(listItem, Handler) {
  
  const handler = useCallback(() => {
    Handler(listItem)
  },[Handler,listItem])

  return handler
}

export default useSpecificHandler