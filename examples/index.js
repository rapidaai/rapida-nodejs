import {
  InitiateAssistantTalk,
  ConnectionConfig,
  AssistantDefinition,
  StringToAny,
} from "../src";
async function main() {
  try {
    // Example 3: Single Message Talk

    // assistant=(2195393855983976448, "latest"),
    //         source=RapidaSource.TWILIO_CALL,
    //         arguments={
    //             "name": StringValue("Prashant"),
    //         },
    //         params={
    //             "to_phone": StringValue("+13342928005"),
    //         }

    const params = new Map();
    params.set("to_phone", StringToAny("+13342928005"));
    const ast = new AssistantDefinition();
    ast.setAssistantid("2195393855983976448");
    ast.setVersion("latest");
    const talkClient = InitiateAssistantTalk(
      new ConnectionConfig(
        ConnectionConfig.WithSDK({
          apiKey:
            "05064a056f0a60f309ff1d5cc66cb6bb5ecd1d79238e048b2594b51bfb9d4610",
          userId: "prashant",
        })
      ).withLocal(),
      ast,
      new Map()
    );
    console.dir(talkClient);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
