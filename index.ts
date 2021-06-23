import { CryptoHelper, IEvent } from "@radko94/message-buss-models";
import { createConnection, Socket } from "net";
import { fromEvent, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

export class MessageClient {
  private readonly client: Socket;

  public constructor(host: string, port: number) {
    this.client = createConnection(port, host);
    this.client.on("connect", () => console.log("client connected"));
  }

  public publish(event: IEvent): void {
    event.data = CryptoHelper.ENCRYPT("mySecureKey", event.data);

    this.client.write(JSON.stringify(event));
  }

  public subscribeForEvent(eventName: string): Observable<string> {
    return fromEvent<Buffer>(this.client, "data").pipe(
      map((buffer) => JSON.parse(buffer.toString()) as IEvent),
      filter((event: IEvent) => event.eventName === eventName),
      map(
        (event: IEvent) =>
          (event.data = CryptoHelper.DECRYPT("mySecureKey", event.data))
      )
    );
  }
}
