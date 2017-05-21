export class EventDispatcher<TSender, TArgs> implements IEvent<TSender, TArgs> {
    private handlers: Array<(sender: TSender, args: TArgs) => void> = new Array<(sender: TSender, args: TArgs) => void>();

    public Off(handler: (sender: TSender, args: TArgs) => void): void {
        let index = this.handlers.indexOf(handler);

        if (index > -1) {
            this.handlers.splice(index, 1);
        }
    }

    public On(handler: (sender: TSender, args: TArgs) => void): void {
        if (handler !== undefined && handler !== null) {
            this.handlers.push(handler);
        }
    }

    public Trigger(sender: TSender, args: TArgs): void {
        for (let handler of this.handlers) {
            handler(sender, args);
        }
    }
}

export interface IEvent<TSender, TArgs> {
    Off(handler: (sender: TSender, args: TArgs) => void): void;
    On(handler: (sender: TSender, args: TArgs) => void): void;
}