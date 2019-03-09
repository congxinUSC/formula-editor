export type KatexOptionStrictCallback = (errorCode: number, errorMsg: string, token: object) => void;
export interface KatexOptions {
  displayMode?: boolean; // false. Display mode means formula will be on it's own line and larger.
  throwOnError?: boolean; // true. Will throw ParseError.
  errorColor?: string; // '#cc0000'. Invalid formula color if not throwing error.
  macro?: object; // null. <macro name>: <macro extension> pairs.
  colorIsTextColor?: boolean; // false. '\color' behaves like '\textcolor'
  maxSize?: number; // Infinity.
  maxExpand?: number; // 1000. Maximum macros to expand.
  allowedProtocols?: string[]; // ["http", "https", "mailto", "_relative"]
  strict?: boolean|string|KatexOptionStrictCallback; // "warn"
}
