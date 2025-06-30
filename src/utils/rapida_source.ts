/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */
import { Source, SourceMap } from "@/rapida/clients/protos/common_pb";

export enum RapidaSource {
  WEB_PLUGIN = "web-plugin",
  RAPIDA_APP = "rapida-app",
  DEBUGGER = "debugger", // no proto value

  PYTHON_SDK = "python-sdk",
  NODE_SDK = "node-sdk",
  GO_SDK = "go-sdk",
  JAVA_SDK = "java-sdk",
  PHP_SDK = "php-sdk",
  RUST_SDK = "rust-sdk",
  TYPESCRIPT_SDK = "typescript-sdk",
  REACT_SDK = "react-sdk",

  TWILIO_CALL = "twilio-call",
}

// Only the sources that exist in the protobuf Source enum
type MappedRapidaSource =
  | RapidaSource.WEB_PLUGIN
  | RapidaSource.RAPIDA_APP
  | RapidaSource.PYTHON_SDK
  | RapidaSource.NODE_SDK
  | RapidaSource.GO_SDK
  | RapidaSource.JAVA_SDK
  | RapidaSource.PHP_SDK
  | RapidaSource.RUST_SDK
  | RapidaSource.TYPESCRIPT_SDK
  | RapidaSource.REACT_SDK
  | RapidaSource.TWILIO_CALL;

const SourceMapping: Record<MappedRapidaSource, number> = {
  [RapidaSource.WEB_PLUGIN]: Source.WEB_PLUGIN,
  [RapidaSource.RAPIDA_APP]: Source.RAPIDA_APP,
  [RapidaSource.PYTHON_SDK]: Source.PYTHON_SDK,
  [RapidaSource.NODE_SDK]: Source.NODE_SDK,
  [RapidaSource.GO_SDK]: Source.GO_SDK,
  [RapidaSource.JAVA_SDK]: Source.JAVA_SDK,
  [RapidaSource.PHP_SDK]: Source.PHP_SDK,
  [RapidaSource.RUST_SDK]: Source.RUST_SDK,
  [RapidaSource.TYPESCRIPT_SDK]: Source.TYPESCRIPT_SDK,
  [RapidaSource.REACT_SDK]: Source.REACT_SDK,
  [RapidaSource.TWILIO_CALL]: Source.TWILIO_CALL,
};

export function GetProtoSource(
  source: RapidaSource
): SourceMap[keyof SourceMap] {
  const mappedSource = SourceMapping[source as MappedRapidaSource];
  if (mappedSource === undefined) {
    console.warn(`Invalid RapidaSource: ${source}`);
  }
  return Source.NODE_SDK;
}
