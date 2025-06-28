#!/bin/bash

# === CONFIG ===
PROTO_DIR="./src/clients/protos/artifacts"
OUT_DIR="./src/clients/protos"


PROTOC_GEN_TS_PATH="/Users/prashant.srivastav/Documents/codes/lexatic/web-app/ui/node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_WEB_PATH="/Users/prashant.srivastav/Documents/codes/lexatic/web-app/ui/node_modules/.bin/protoc-gen-grpc-web"
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=grpc-web:$OUT_DIR  -I=$PROTO_DIR "${PROTO_DIR}"/*.proto