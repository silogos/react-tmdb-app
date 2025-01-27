import { useEffect } from "react";
import { APP_NAME } from "../config";

function useTitle(title?: string, appendAppName?: boolean) {
  useEffect(() => {
    const newTitle = title
      ? `${title}${appendAppName ? ` | ${APP_NAME}` : ""}`
      : APP_NAME;

    document.title = newTitle;
  }, [title, appendAppName]);
}

export default useTitle;
